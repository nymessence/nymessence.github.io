/* Numerology Translator Core
   Loads your research CSVs and JSON if provided.
   Falls back to a compact default dictionary for single digits, master numbers, and common repeats.
*/

(function () {
  // -----------------------------
  // Utilities
  // -----------------------------
  const $ = (sel) => document.querySelector(sel);
  const summaryEl = $("#summary");
  const resultsEl = $("#results");

  const isDigitsOnly = (s) => /^[0-9]+$/.test(s);
  const onlyDigits = (s) => (s.match(/[0-9]/g) || []).join("");
  const stripDiacritics = (s) => s.normalize("NFD").replace(/\p{Diacritic}/gu, "");
  const toAsciiUpper = (s) => stripDiacritics(s).toUpperCase();

  function csvParse(text) {
    // Basic CSV parser with quote handling
    const rows = [];
    let i = 0, field = "", row = [], inQuotes = false;
    while (i < text.length) {
      const c = text[i];
      if (inQuotes) {
        if (c === '"') {
          if (text[i + 1] === '"') { field += '"'; i += 2; continue; }
          inQuotes = false; i++; continue;
        } else { field += c; i++; continue; }
      } else {
        if (c === '"') { inQuotes = true; i++; continue; }
        if (c === ",") { row.push(field); field = ""; i++; continue; }
        if (c === "\n") { row.push(field); rows.push(row); row = []; field = ""; i++; continue; }
        if (c === "\r") { i++; continue; }
        field += c; i++;
      }
    }
    row.push(field); rows.push(row);
    // Trim possible trailing empty row
    return rows.filter(r => !(r.length === 1 && r[0] === ""));
  }

  function inferColumns(rows) {
    const [header, ...data] = rows;
    return data.map(r => {
      const o = {};
      header.forEach((h, j) => { o[h.trim()] = (r[j] ?? "").trim(); });
      return o;
    });
  }

  function isPrime(n) {
    if (n < 2) return false;
    if (n % 2 === 0) return n === 2;
    const m = Math.floor(Math.sqrt(n));
    for (let k = 3; k <= m; k += 2) if (n % k === 0) return false;
    return true;
  }

  function digitSum(n) {
    return String(n).split("").reduce((a, b) => a + Number(b), 0);
  }

  function reduceToDigitOrMaster(n) {
    let s = String(n);
    while (s.length > 2) s = String(digitSum(s));
    if (["11", "22", "33"].includes(s)) return s;
    while (s.length > 1) s = String(digitSum(s));
    return s;
  }

  function detectPatterns(numStr) {
    const s = numStr;
    const digits = s.split("");
    const unique = new Set(digits);

    const repeated = unique.size === 1 && s.length > 1;
    const palindrome = s === digits.slice().reverse().join("");
    const ascending = "0123456789".includes(s);
    const descending = "9876543210".includes(s);
    const mirroredTime = s.length === 4 && s.slice(0,2) === s.slice(2).split("").reverse().join(""); // e.g., 1221

    const buckets = [];
    if (repeated) buckets.push("repeat");
    if (palindrome) buckets.push("palindrome");
    if (ascending) buckets.push("ascending");
    if (descending) buckets.push("descending");
    if (mirroredTime) buckets.push("mirrored");

    // common sequences to tag explicitly
    const common = new Set(["000", "0000","111","1111","222","2222","333","3333",
      "444","4444","555","5555","666","6666","777","7777","888","8888","999","9999",
      "1010","0101","1212","1221","1234","4321"
    ]);
    if (common.has(s)) buckets.push("common-sequence");
    return buckets;
  }

  // -----------------------------
  // Defaults, can be overridden by CSVs
  // -----------------------------
  let DATA = {
    numbersCore: new Map(),       // key: number string, value: array of entries
    repeats: new Map(),           // key: pattern string, value: entries
    primes: new Map(),            // key: prime string, value: entry
    constants: new Map(),         // symbol string -> entry
    mappings: {
      // Pythagorean A1 Z26 repeating 1..9
      pythagorean: {
        A:1,B:2,C:3,D:4,E:5,F:6,G:7,H:8,I:9,
        J:1,K:2,L:3,M:4,N:5,O:6,P:7,Q:8,R:9,
        S:1,T:2,U:3,V:4,W:5,X:6,Y:7,Z:8
      },
      // Chaldean common chart
      chaldean: {
        A:1,B:2,C:3,D:4,E:5,F:8,G:3,H:5,I:1,J:1,K:2,L:3,M:4,N:5,O:7,P:8,
        Q:1,R:2,S:3,T:4,U:6,V:6,W:6,X:5,Y:1,Z:7
      }
    }
  };

  // Compact default readings
  const DEFAULT_SINGLE_DIGITS = {
    "0": {label:"Potential", short:"void, source, reset", level:"modern", notes:"Used in patterns like 1010"},
    "1": {label:"Initiation", short:"self, start, focus", level:"classical"},
    "2": {label:"Partnership", short:"balance, relation", level:"classical"},
    "3": {label:"Expression", short:"creativity, voice", level:"classical"},
    "4": {label:"Structure", short:"work, foundation", level:"classical"},
    "5": {label:"Change", short:"movement, travel", level:"classical"},
    "6": {label:"Care", short:"home, duty", level:"classical"},
    "7": {label:"Inquiry", short:"study, inner work", level:"classical"},
    "8": {label:"Power", short:"material success", level:"classical"},
    "9": {label:"Completion", short:"closure, service", level:"classical"}
  };

  const DEFAULT_REPEATS = {
    "111": {label:"Alignment", short:"new cycle, focus", level:"modern"},
    "1111": {label:"Gateway", short:"initiation, clarity", level:"modern"},
    "222": {label:"Balance", short:"patience, support", level:"modern"},
    "2222": {label:"Partnership+", short:"cooperation", level:"modern"},
    "333": {label:"Expression+", short:"ideas landing", level:"modern"},
    "3333": {label:"Trinity+", short:"communication", level:"modern"},
    "444": {label:"Stability", short:"build the base", level:"modern"},
    "4444": {label:"Foundation+", short:"discipline", level:"modern"},
    "555": {label:"Change", short:"pivot, travel", level:"modern"},
    "5555": {label:"Change+", short:"course correction", level:"modern"},
    "666": {label:"Responsibility", short:"home, duty", level:"mixed"},
    "6666": {label:"Responsibility+", short:"re-balance home", level:"mixed"},
    "777": {label:"Insight", short:"learning, luck", level:"modern"},
    "7777": {label:"Insight+", short:"spiritual study", level:"modern"},
    "888": {label:"Abundance", short:"achievement", level:"cultural"},
    "8888": {label:"Abundance+", short:"material fruition", level:"cultural"},
    "999": {label:"Closure", short:"wrap, release", level:"modern"},
    "9999": {label:"Closure+", short:"end then begin", level:"modern"},
    "1010": {label:"Rhythm", short:"step and reset", level:"modern"},
    "1212": {label:"Ladder", short:"staged growth", level:"modern"},
    "1221": {label:"Mirror", short:"reflect and balance", level:"modern"},
    "1234": {label:"Sequence", short:"progression", level:"modern"},
    "4321": {label:"Countdown", short:"launch, finalize", level:"modern"}
  };

  const DEFAULT_NOTABLES = {
    "42": {label:"Curiosity", short:"answer joke, synthesis", level:"pop"},
    "69": {label:"Polarity", short:"yin and yang", level:"cultural"},
    "108": {label:"Sacred count", short:"prayer bead count", level:"cultural"},
    "137": {label:"Mystique", short:"physics lore", level:"pop"},
    "369": {label:"Triad", short:"cycles, patterning", level:"pop"},
    "432": {label:"Tuning lore", short:"music claims", level:"pop"},
    "528": {label:"Healing lore", short:"solfeggio claim", level:"pop"},
    "6174": {label:"Kaprekar", short:"math constant", level:"math"}
  };

  // -----------------------------
  // Data ingestion
  // -----------------------------
  function loadCoreRows(rows) {
    rows.forEach(r => {
      const key = (r.number ?? "").trim();
      if (!key) return;
      const entry = {
        number: key,
        school: r.school || "pythagorean",
        reduced_value: r.reduced_value || "",
        label: r.label || "",
        short_meaning: r.short_meaning || "",
        extended_notes: r.extended_notes || "",
        tradition_level: r.tradition_level || "",
        common_uses: r.common_uses || "",
        caution_notes: r.caution_notes || "",
        citations: r.citations || ""
      };
      if (!DATA.numbersCore.has(key)) DATA.numbersCore.set(key, []);
      DATA.numbersCore.get(key).push(entry);
    });
  }

  function loadRepeatsRows(rows) {
    rows.forEach(r => {
      const p = (r.pattern ?? "").trim();
      if (!p) return;
      const entry = {
        pattern: p,
        length: r.length || p.length,
        reduced_value: r.reduced_value || "",
        typical_reading: r.typical_reading || "",
        school: r.school || "",
        notes: r.notes || "",
        citations: r.citations || ""
      };
      if (!DATA.repeats.has(p)) DATA.repeats.set(p, []);
      DATA.repeats.get(p).push(entry);
    });
  }

  function loadPrimesRows(rows) {
    rows.forEach(r => {
      const p = (r.prime ?? "").trim();
      if (!p) return;
      const entry = {
        prime: p,
        digit_sum: r.digit_sum || "",
        reduced_value: r.reduced_value || "",
        traditional_meanings: r.traditional_meanings || "",
        pop_meanings: r.pop_meanings || "",
        math_class: r.math_class || "prime",
        citations: r.citations || ""
      };
      DATA.primes.set(p, entry);
    });
  }

  function loadConstantsRows(rows) {
    rows.forEach(r => {
      const sym = (r.symbol ?? "").trim() || (r.value ?? "").trim();
      if (!sym) return;
      const entry = {
        symbol: sym,
        value: r.value || "",
        cultural_readings: r.cultural_readings || "",
        misuse_warnings: r.misuse_warnings || "",
        citations: r.citations || ""
      };
      DATA.constants.set(sym, entry);
    });
  }
  
  function normalizeMap(mapObj) {
    const out = {};
    for (const [k, v] of Object.entries(mapObj)) out[k.toUpperCase()] = Number(v);
    return out;
  }

  // -----------------------------
  // NEW: Data fetching from files
  // -----------------------------
  async function loadDataFromFiles() {
    const processCsv = async (path, loaderFn) => {
        try {
            const response = await fetch(path);
            if (!response.ok) {
                // Don't show a toast for 404s, just log it.
                console.warn(`File not found or failed to load: ${path}`);
                return;
            }
            const text = await response.text();
            const rows = csvParse(text);
            const objs = inferColumns(rows);
            loaderFn(objs);
            toast(`Loaded: ${path.split('/').pop()}`, "good");
        } catch (e) {
            toast(`Failed to process ${path.split('/').pop()}`, "bad");
            console.error(`Error processing ${path}:`, e);
        }
    };

    const processJson = async (path, targetKey) => {
        try {
            const response = await fetch(path);
            if (!response.ok) {
                console.warn(`File not found or failed to load: ${path}`);
                return;
            }
            const obj = await response.json();
            if (targetKey === 'mappings') {
                if (obj.pythagorean) DATA.mappings.pythagorean = normalizeMap(obj.pythagorean);
                if (obj.chaldean) DATA.mappings.chaldean = normalizeMap(obj.chaldean);
            }
            // This can be extended for other JSON files if needed
            toast(`Loaded: ${path.split('/').pop()}`, "good");
        } catch (e) {
            toast(`Failed to parse ${path.split('/').pop()}`, "bad");
            console.error(`Error processing ${path}:`, e);
        }
    };

    // Define all data files to be loaded from relative paths
    await processCsv('../csv/core.csv', loadCoreRows);
    await processCsv('../csv/repeats.csv', loadRepeatsRows);
    await processCsv('../csv/primes.csv', loadPrimesRows);
    await processCsv('../csv/constants.csv', loadConstantsRows);
    await processJson('../js/mappings.json', 'mappings');
  }


  // -----------------------------
  // Translators
  // -----------------------------
  function mapName(name, school) {
    const map = DATA.mappings[school] || DATA.mappings.pythagorean;
    const chars = toAsciiUpper(name).replace(/[^A-Z]/g, "").split("");
    const values = chars.map(c => map[c] || 0);
    const total = values.reduce((a, b) => a + b, 0);
    const reduced = reduceToDigitOrMaster(total);
    return { chars, values, total, reduced };
  }

  function rankReadings(base, extras, context) {
    // Simple weighting, tweak later
    const ctxWeights = {
      clock: 0.6, transaction: 0.5, address: 0.4, dream: 0.7, general: 0.5
    };
    const w = ctxWeights[context] ?? 0.5;

    const items = [];
    base.forEach(b => items.push({ ...b, score: 0.6 + w }));
    extras.forEach(x => items.push({ ...x, score: 0.5 + w * 0.4 }));

    // Deduplicate by (label+source)
    const seen = new Set();
    const unique = items.filter(it => {
      const key = `${it.label}|${it.source||""}|${it.short||""}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });

    unique.sort((a, b) => b.score - a.score);
    return unique.slice(0, 6);
  }

  function fromCoreDictionary(nStr, school) {
    const rows = DATA.numbersCore.get(nStr) || [];
    const out = rows
      .filter(r => r.school === school || r.school === "" || school === "pythagorean")
      .map(r => ({
        label: r.label || `Number ${nStr}`,
        short: r.short_meaning || "",
        level: r.tradition_level || "unspecified",
        notes: r.extended_notes || "",
        citations: r.citations || "",
        source: "core"
      }));
    return out;
  }

  function fromDefaultDictionary(nStr) {
    // Single digits and notable
    const list = [];
    if (DEFAULT_SINGLE_DIGITS[nStr]) {
      const d = DEFAULT_SINGLE_DIGITS[nStr];
      list.push({label: d.label, short: d.short, level: d.level, source: "default"});
    }
    if (DEFAULT_NOTABLES[nStr]) {
      const d = DEFAULT_NOTABLES[nStr];
      list.push({label: d.label, short: d.short, level: d.level, source: "default-notable"});
    }
    return list;
  }

  function fromRepeats(patternStr) {
    const rows = DATA.repeats.get(patternStr) || [];
    return rows.map(r => ({
      label: r.typical_reading || `Pattern ${patternStr}`,
      short: r.notes || "",
      level: "sequence",
      citations: r.citations || "",
      source: "repeats"
    }));
  }

  function fromDefaultRepeats(patternStr) {
    const d = DEFAULT_REPEATS[patternStr];
    if (!d) return [];
    return [{ label: d.label, short: d.short, level: d.level, source: "default-repeat" }];
  }

  // -----------------------------
  // Orchestrator
  // -----------------------------
  function analyze() {
    const raw = $("#userInput").value.trim();
    const context = $("#context").value;
    const school = $("#school").value;

    summaryEl.innerHTML = "";
    resultsEl.innerHTML = "";

    if (!raw) return;

    if (isDigitsOnly(onlyDigits(raw)) && onlyDigits(raw).length > 0 && (onlyDigits(raw).length === raw.length)) {
      // Numeric path
      const numStr = raw;
      const n = Number(numStr);
      const reduced = reduceToDigitOrMaster(numStr);
      const prime = isPrime(n);
      const patterns = detectPatterns(numStr);

      // Gather readings
      const fromCore = fromCoreDictionary(numStr, school);
      const fromDefault = fromDefaultDictionary(numStr);
      const fromRepeat = fromRepeats(numStr);
      const fromDefaultRepeat = fromDefaultRepeats(numStr);

      // If reduced value differs and exists, include single digit summary
      const reducedExtras = [];
      if (reduced !== numStr) {
        const reducedCore = fromCoreDictionary(reduced, school);
        const reducedDefault = fromDefaultDictionary(reduced);
        reducedExtras.push(...reducedCore, ...reducedDefault.map(x => ({...x, label: `${x.label} (reduced ${reduced})`})));
      }

      // Notable mapped numbers as extras
      const notable = fromDefaultDictionary(numStr);

      const base = [...fromCore, ...fromRepeat];
      const extras = [...fromDefault, ...fromDefaultRepeat, ...reducedExtras, ...notable];

      // Prime specific row if loaded
      if (prime && DATA.primes.has(numStr)) {
        const p = DATA.primes.get(numStr);
        extras.push({
          label: "Prime", short: p.traditional_meanings || "indivisible quality",
          level: "math", source: "primes", notes: p.pop_meanings || ""
        });
      } else if (prime) {
        extras.push({ label: "Prime", short: "indivisible, purity theme", level: "math", source: "prime-check" });
      }

      const ranked = rankReadings(base, extras, context);

      // Summary block
      const tags = [];
      tags.push(`<span class="tag">${patterns.join(", ") || "no-pattern"}</span>`);
      tags.push(prime ? `<span class="tag good">prime</span>` : `<span class="tag">composite</span>`);
      tags.push(["11","22","33"].includes(numStr) ? `<span class="tag good">master</span>` : `<span class="tag">reduced ${reduced}</span>`);
      summaryEl.innerHTML = `
        <div class="result">
          <h3>${numStr}</h3>
          <div class="muted">context: ${context}, school: ${school}</div>
          <div style="margin-top:8px">${tags.join(" ")}</div>
        </div>
      `;

      // Details list
      ranked.forEach(item => renderResult(item));

      // Pattern table
      if (patterns.length > 0) {
        renderPatternTable(numStr, patterns);
      }

    } else {
      // Name or mixed input
      const name = raw;
      const info = mapName(name, school);
      const reduced = info.reduced;

      const base = fromCoreDictionary(reduced, school);
      const extra = fromDefaultDictionary(reduced);

      const ranked = rankReadings(base, extra, context);

      summaryEl.innerHTML = `
        <div class="result">
          <h3>${name}</h3>
          <div class="muted">school: ${school}</div>
          <div style="margin-top:8px">
            <span class="tag">sum ${info.total}</span>
            <span class="tag">reduced ${info.reduced}</span>
          </div>
          <div class="muted" style="margin-top:8px">${info.chars.map((c,i)=>`${c}<span class="muted">(${info.values[i]})</span>`).join(" · ")}</div>
        </div>
      `;
      ranked.forEach(item => renderResult(item));
    }
  }

  function renderResult(item) {
    const levelTag = (() => {
      const l = (item.level || "").toLowerCase();
      if (["classical","cultural"].includes(l)) return `<span class="pill">${l}</span>`;
      if (l === "math") return `<span class="pill">math</span>`;
      if (l === "modern") return `<span class="pill warn">modern</span>`;
      if (l === "pop") return `<span class="pill warn">pop</span>`;
      if (l === "mixed") return `<span class="pill">mixed</span>`;
      return `<span class="pill">unspecified</span>`;
    })();
    const src = item.source ? `<span class="pill">${item.source}</span>` : "";
    const notes = item.notes ? `<div class="muted" style="margin-top:6px">${item.notes}</div>` : "";

    const citations = item.citations ? `<div class="muted" style="margin-top:6px">citations: ${item.citations}</div>` : "";

    const html = `
      <div class="result">
        <h3>${item.label}</h3>
        <div>${levelTag} ${src}</div>
        <div style="margin-top:6px">${escapeHtml(item.short || "")}</div>
        ${notes}
        ${citations}
      </div>
    `;
    resultsEl.insertAdjacentHTML("beforeend", html);
  }

  function renderPatternTable(numStr, patterns) {
    const reduced = reduceToDigitOrMaster(numStr);
    const rows = `
      <tr><td>pattern</td><td>${patterns.join(", ")}</td></tr>
      <tr><td>length</td><td>${numStr.length}</td></tr>
      <tr><td>reduced</td><td>${reduced}</td></tr>
    `;
    const html = `
      <div class="result">
        <h3>Pattern analysis</h3>
        <table class="table">
          <tbody>${rows}</tbody>
        </table>
      </div>
    `;
    resultsEl.insertAdjacentHTML("beforeend", html);
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
  }

  // Toasts
  let toastTimer = null;
  function toast(text, kind = "info") {
    const t = document.createElement("div");
    t.textContent = text;
    t.style.position = "fixed";
    t.style.bottom = "16px";
    t.style.right = "16px";
    t.style.padding = "10px 12px";
    t.style.borderRadius = "10px";
    t.style.border = "1px solid var(--border)";
    t.style.background = kind === "bad" ? "#2a1515" : (kind === "good" ? "#142718" : "#121826");
    t.style.color = "var(--text)";
    t.style.boxShadow = "0 10px 30px rgba(0,0,0,.3)";
    document.body.appendChild(t);
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.remove(), 2000);
  }

  // Events
  $("#btnAnalyze").addEventListener("click", analyze);
  $("#btnClear").addEventListener("click", () => {
    $("#userInput").value = "";
    summaryEl.innerHTML = "";
    resultsEl.innerHTML = "";
  });
  $("#userInput").addEventListener("keydown", e => {
    if (e.key === "Enter") analyze();
  });

  // Keyboard focus
  $("#userInput").focus();

  // Preload small defaults into the core map for quick wins
  function seedDefaults() {
    // Single digits
    for (const [k, v] of Object.entries(DEFAULT_SINGLE_DIGITS)) {
      if (!DATA.numbersCore.has(k)) DATA.numbersCore.set(k, []);
      DATA.numbersCore.get(k).push({
        number: k, school: "pythagorean", reduced_value: k,
        label: v.label, short_meaning: v.short, extended_notes: "",
        tradition_level: v.level, common_uses: "", caution_notes: "", citations: ""
      });
    }
    // Master numbers
    [
      ["11","Illumination","intuition, awakening"],
      ["22","Master Builder","vision into form"],
      ["33","Master Teacher","service, compassion"]
    ].forEach(([n, label, short]) => {
      if (!DATA.numbersCore.has(n)) DATA.numbersCore.set(n, []);
      DATA.numbersCore.get(n).push({
        number: n, school: "pythagorean", reduced_value: n,
        label, short_meaning: short, extended_notes: "",
        tradition_level: "classical", common_uses: "", caution_notes: "", citations: ""
      });
    });

    // Notables
    for (const [k, v] of Object.entries(DEFAULT_NOTABLES)) {
      if (!DATA.numbersCore.has(k)) DATA.numbersCore.set(k, []);
      DATA.numbersCore.get(k).push({
        number: k, school: "pythagorean", reduced_value: reduceToDigitOrMaster(k),
        label: v.label, short_meaning: v.short, extended_notes: "",
        tradition_level: v.level, common_uses: "", caution_notes: "", citations: ""
      });
    }

    // Repeats
    for (const [k, v] of Object.entries(DEFAULT_REPEATS)) {
      DATA.repeats.set(k, [{
        pattern: k, length: k.length, reduced_value: reduceToDigitOrMaster(k),
        typical_reading: v.label, school: "pythagorean", notes: v.short, citations: ""
      }]);
    }
  }

  // Initialize default data first, then try to load external files.
  seedDefaults();
  loadDataFromFiles();

})();

