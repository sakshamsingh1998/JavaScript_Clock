
#!/bin/bash

# Project directory
PROJECT_DIR="/mnt/c/TuteDude/JavaScript_Clock"

# Navigate to project
cd "$PROJECT_DIR" || exit 1

# Load NVM
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && source "$NVM_DIR/nvm.sh"

# Use default Node.js
nvm use default

# Start application
echo "Starting JavaScript Clock..."

node "$PROJECT_DIR/server.js"
