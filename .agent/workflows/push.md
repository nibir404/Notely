---
description: Stage, commit, and push all current changes to GitHub
---

This workflow automates the process of synchronizing your local changes with the remote GitHub repository. It should be used after completing a task, adding a new feature, or making any significant updates.

### Steps:

1. **Stage Changes**:
   // turbo
   - Run `git add .` to stage all modified, deleted, and untracked files.

2. **Commit Changes**:
   // turbo
   - Run `git commit -m "update: [brief summary of changes]"` with a clear description of what was changed in this iteration.

3. **Push to GitHub**:
   // turbo
   - Run `git push` to upload the local commit(s) to the remote repository.

### Usage:
Invoke this by saying **"/push"** or **"push my changes to github"**.
