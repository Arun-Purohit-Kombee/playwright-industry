@echo off
echo 🔧 Setting up Husky + Commitlint for commit message checks...

:: Check if npm is installed
where npm >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ npm not found. Please install Node.js (includes npm) first.
    exit /b 1
)

:: Initialize npm if package.json not exists
if not exist package.json (
    echo 📦 No package.json found. Initializing...
    call npm init -y
)

:: Install Husky & Commitlint
echo 📥 Installing Husky & Commitlint...
call npm install husky @commitlint/config-conventional @commitlint/cli --save-dev

:: Enable Husky
echo ⚙️ Enabling Husky...
call npx husky install

:: Add commit-msg hook
echo 📌 Adding commit-msg hook...
call npx husky add .husky/commit-msg "npx --no -- commitlint --edit $1"

:: Create commitlint.config.js
echo 📝 Creating commitlint.config.js...
(
echo module.exports = {
echo^  extends: ['@commitlint/config-conventional'],
echo^  rules: {
echo^    'type-enum': [
echo^      2,
echo^      'always',
echo^      [
echo^        'feat',
echo^        'fix',
echo^        'chore',
echo^        'docs',
echo^        'style',
echo^        'refactor',
echo^        'perf',
echo^        'test',
echo^        'build',
echo^        'ci',
echo^        'revert',
echo^        'hotfix'
echo^      ]
echo^    ],
echo^    'subject-case': [2, 'never', ['start-case', 'pascal-case']],
echo^  }
echo };
) > commitlint.config.js

echo ✅ Husky + Commitlint setup complete!
echo Try committing with a wrong message (e.g., "update code") and it will be blocked.
echo Use correct format, e.g.: feat(auth): add biometric login
pause
