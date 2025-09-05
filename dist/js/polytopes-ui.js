// polytopes-ui.js
// Minimal module that installs robust UI -> canvas event filtering.
// Exported so polytopes.js can import and call it.

export function installUIEventFiltering() {
    // Utility: detect whether event started inside #ui
    function targetIsInUI(e) {
        try {
            const path = e.composedPath && e.composedPath();
            if (path && path.some(el => el && el.id === 'ui')) return true;
        } catch (err) {
            // ignore
        }
        return e.target && e.target.closest && !!e.target.closest('#ui');
    }

    // Block events at capture phase if they originate in the UI.
    const blockEvents = [
        'pointerdown', 'pointermove', 'pointerup',
        'touchstart', 'touchmove', 'touchend',
        'wheel'
    ];

    blockEvents.forEach(type => {
        document.addEventListener(type, (e) => {
            if (targetIsInUI(e)) {
                // Stop propagation so OrbitControls / canvas handlers never see it.
                e.stopPropagation();
                // Prevent default for wheel/touch so the canvas doesn't zoom while using the UI.
                if (type === 'wheel' || type.startsWith('touch')) e.preventDefault();
            }
        }, { capture: true, passive: false });
    });

    // Extra safety: stop propagation for interactive controls inside #ui
    // (covers cases where some handlers are attached directly on inputs)
    function attachStopToUIControls() {
        const ui = document.getElementById('ui');
        if (!ui) return;
        const els = ui.querySelectorAll('input, select, button, textarea, label');
        els.forEach(el => {
            // pointer events should not reach canvas
            el.addEventListener('pointerdown', e => e.stopPropagation(), { passive: true });
            el.addEventListener('pointermove', e => e.stopPropagation(), { passive: true });
            el.addEventListener('pointerup',   e => e.stopPropagation(), { passive: true });
            // wheel on a control (like number input) should not bubble
            el.addEventListener('wheel', e => { e.stopPropagation(); e.preventDefault(); }, { passive: false });
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', attachStopToUIControls);
    } else {
        attachStopToUIControls();
    }
}
