# Assignment: Fix a Bad Commit with `git commit --amend`

## Scenario
A developer was rushing to finish the "JWT Authentication" feature before end of sprint.
They made one commit — but it was a DISASTER. The commit:

1. **Leaked production secrets**: accidentally committed a real `.env` file containing
   the database password and JWT secret to the repository.
2. **Missing a critical file**: forgot to include `src/middleware/authenticate.js` —
   the actual JWT verification middleware that the routes depend on.
3. **Left debug code in**: `src/controllers/userController.js` has a dozen `console.log`
   statements that were used during development and must be removed before production.
4. **Typo in commit message**: `"feat: add auth setup and login endpoit"` (missing 'n').

## Your Tasks

### Step 1: Inspect the damage
```bash
git log --oneline -5
git show HEAD --stat
git diff HEAD~1 HEAD
```

### Step 2: Remove the `.env` file from the commit
The `.env` file must NEVER be committed. Remove it from git's tracking:
```bash
git rm --cached .env
```
Then open `.gitignore` and make sure `.env` is listed (it should already be — just verify).

### Step 3: Create the missing middleware file
Create `src/middleware/authenticate.js` with a proper JWT verification middleware.
It should extract the Bearer token from `Authorization` header, verify it using
`jsonwebtoken`, attach `req.user` with the decoded payload, and call `next()`.

### Step 4: Remove debug console.logs
Open `src/controllers/userController.js` and remove ALL the `console.log` debug
statements (lines marked with `// DEBUG`). Keep the real logic intact.

### Step 5: Amend the commit
Stage all your changes and amend the last commit:
```bash
git add src/middleware/authenticate.js src/controllers/userController.js .gitignore
git commit --amend -m "feat: add JWT authentication middleware and login endpoint"
```

### Step 6: Verify
```bash
git log --oneline -3       # Should show the corrected commit message
git show HEAD --stat       # Should NOT show .env; SHOULD show authenticate.js
git diff HEAD~1 HEAD -- .env  # Should show nothing (file was removed from commit)
```

## Expected Final State
- `.env` is NOT tracked by git (but exists locally for development)
- `.gitignore` includes `.env`
- `src/middleware/authenticate.js` exists with JWT verification logic
- `src/controllers/userController.js` has NO debug console.log lines
- The amend commit message is exactly: `feat: add JWT authentication middleware and login endpoint`
