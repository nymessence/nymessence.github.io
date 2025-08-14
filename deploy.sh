#!/bin/bash

# Exit immediately if a command exits with a non-zero status.
set -e

# =========================================================
# === Part 1: Interactive Commit and Push to 'main' branch ===
# =========================================================

# === Git config setup ===
# Use your name and email here. This ensures your commits are correctly attributed.
GIT_USER="nymessence"
GIT_EMAIL="humid_ray_0u@icloud.com"

git config user.name "$GIT_USER"
git config user.email "$GIT_EMAIL"

# === Load GitHub token from a file ===
# This script assumes you have a Personal Access Token stored in a file.
TOKEN_FILE="$HOME/.gh_token"
if [[ ! -f "$TOKEN_FILE" ]]; then
    echo "❌ GitHub token file not found at $TOKEN_FILE"
    echo "👉 Create a new token with 'repo' scope at: https://github.com/settings/tokens"
    echo "   Then save it to: $TOKEN_FILE"
    exit 1
fi
GITHUB_TOKEN=$(<"$TOKEN_FILE")

# === Get current remote URL and inject the token for authentication ===
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

# === Commit process ===
read -p "Enter your commit message: " COMMIT_MSG

git add .
echo
git status
echo

# Check if there are any changes to commit on the current branch
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

# Set variables for the deployment
BUILD_DIR="dist"
GH_PAGES_BRANCH="gh-pages"
ORIGINAL_BRANCH=$(git rev-parse --abbrev-ref HEAD)

# Check if the build directory exists
if [ ! -d "$BUILD_DIR" ]; then
    echo "Error: The build directory '$BUILD_DIR' does not exist."
    echo "Please ensure 'npm run build' generates this folder."
    exit 1
fi

# 1. Build the project
echo "Building the project..."
npm run build || { echo "Build failed. Exiting."; exit 1; }

# 2. Check out to the gh-pages branch
echo "Switching to the '$GH_PAGES_BRANCH' branch..."
git checkout $GH_PAGES_BRANCH 2>/dev/null || git checkout --orphan $GH_PAGES_BRANCH

# 3. Remove all files from the gh-pages branch except the .git directory
echo "Removing old files from the '$GH_PAGES_BRANCH' branch..."
git rm -rf .
git clean -fd

# 4. Copy the contents of the build directory to the root
echo "Copying built files from '$BUILD_DIR' to the root..."
cp -r $BUILD_DIR/. .

# 5. Add, commit, and push the new files to the gh-pages branch
echo "Committing and pushing to GitHub..."
git add .
git commit -m "Deploy to GitHub Pages $(date)"
git push origin $GH_PAGES_BRANCH --force

# 6. Switch back to the original branch
echo "Deployment complete. Switching back to the '$ORIGINAL_BRANCH' branch..."
git checkout $ORIGINAL_BRANCH

echo "🎉 Done! Your site is now deployed to GitHub Pages."
