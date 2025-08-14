#!/bin/bash

set -e

# === Git config setup (unchanged) ===
GIT_USER="nymessence"
GIT_EMAIL="humid_ray_0u@icloud.com"

git config user.name "$GIT_USER"
git config user.email "$GIT_EMAIL"

# === Load GitHub token (unchanged) ===
TOKEN_FILE="$HOME/.gh_token"
if [[ ! -f "$TOKEN_FILE" ]]; then
    echo "❌ GitHub token file not found at $TOKEN_FILE"
    echo "👉 Create a new token with 'repo' scope at: https://github.com/settings/tokens"
    echo "   Then save it to: $TOKEN_FILE"
    exit 1
fi
GITHUB_TOKEN=$(<"$TOKEN_FILE")

# === Get current remote URL and inject the token (unchanged) ===
REMOTE_URL=$(git config --get remote.origin.url)
if [[ "$REMOTE_URL" == git@github.com:* ]]; then
    REPO_PATH="${REMOTE_URL#git@github.com:}"
    REMOTE_URL="https://x-access-token:${GITHUB_TOKEN}@github.com/${REPO_PATH}"
elif [[ "$REMOTE_URL" == https://github.com/* ]]; then
    REPO_PATH="${REMOTE_URL#https://github.com/}"
    REMOTE_URL="https://x-access-token:${GITHUB_TOKEN}@github.com/${REPO_PATH}"
elif [[ "$REMOTE_URL" == https://x-access-token:*@github.com/* ]]; then
    REPO_PATH="${REMOTE_URL#*@github.com/}"
    REMOTE_URL="https://x-access-token:${GITHUB_TOKEN}@github.com/${REPO_PATH}"
else
    echo "❌ Unsupported remote URL format: $REMOTE_URL"
    exit 1
fi

git remote set-url origin "$REMOTE_URL"

# =========================================================
# === Part 1: Interactive Commit and Push to 'main' branch ===
# =========================================================

read -p "Enter your commit message: " COMMIT_MSG

git add .
echo
git status
echo

if git diff --cached --exit-code; then
    echo "⚠️ Nothing to commit. The working tree is clean."
    exit 0
fi

read -p "Proceed with commit and push to 'main'? [y/N]: " CONFIRM
if [[ "$CONFIRM" =~ ^[Yy]$ ]]; then
    git commit -m "$COMMIT_MSG"
    echo "🔁 Pushing source code to 'main' branch..."
    if git push origin main 2>&1 | tee /tmp/git_push_output | grep -qi "Authentication failed"; then
        echo
        echo "❌ Authentication failed."
        echo "🔐 Your GitHub token may have expired."
        echo "👉 Generate a new one at: https://github.com/settings/tokens"
        echo "   Then save it to: $TOKEN_FILE"
        exit 1
    else
        echo "✅ Source code pushed successfully."
    fi
else
    echo "❌ Commit aborted."
    exit 0
fi

# ======================================================
# === Part 2: Build and Deploy to 'gh-pages' branch ===
# ======================================================

echo
echo "---"
echo "Starting deployment of static site to 'gh-pages'..."

BUILD_DIR="dist"
GH_PAGES_BRANCH="gh-pages"
ORIGINAL_BRANCH=$(git rev-parse --abbrev-ref HEAD)

if [ ! -d "$BUILD_DIR" ]; then
    echo "Error: The build directory '$BUILD_DIR' does not exist."
    echo "Please ensure 'npm run build' generates this folder."
    exit 1
fi

echo "Building the project..."
npm run build || { echo "Build failed. Exiting."; exit 1; }

echo "Switching to the '$GH_PAGES_BRANCH' branch..."
git checkout $GH_PAGES_BRANCH 2>/dev/null || git checkout --orphan $GH_PAGES_BRANCH

# === The non-destructive part: copy and overwrite, do not delete ===
# NOTE: This will leave old, unused files on the live website.
echo "Copying built files from '$BUILD_DIR' to the root..."
cp -r $BUILD_DIR/. .

echo "Committing and pushing to GitHub..."
git add .
git commit -m "Deploy to GitHub Pages $(date)"
git push origin $GH_PAGES_BRANCH --force

echo "Deployment complete. Switching back to the '$ORIGINAL_BRANCH' branch..."
git checkout $ORIGINAL_BRANCH

echo "🎉 Done! Your site is now deployed to GitHub Pages."
