# GitHub Setup Instructions

## Steps to Push to GitHub

### Option 1: Using GitHub Web Interface (Recommended)

1. **Go to GitHub** and create a new repository:
   - Visit: https://github.com/new
   - Repository name: `momco-africa-portal` (or your preferred name)
   - Description: "Trilingual event request portal for MomCo Africa ministry"
   - Visibility: Choose **Public** or **Private** as needed
   - ❌ **DO NOT** initialize with README, .gitignore, or license (we already have these)
   - Click "Create repository"

2. **Copy the repository URL** that GitHub shows you (it will look like):
   ```
   https://github.com/YOUR-USERNAME/momco-africa-portal.git
   ```

3. **Run these commands** in your terminal:

   ```bash
   cd "/Users/goldie/workspace/MomCo/Request Portal"

   # Add GitHub as remote origin (replace URL with yours)
   git remote add origin https://github.com/YOUR-USERNAME/momco-africa-portal.git

   # Push to GitHub
   git push -u origin main
   ```

4. **Done!** Your portal is now on GitHub.

---

### Option 2: Using GitHub CLI (if you install it later)

1. **Install GitHub CLI:**
   ```bash
   brew install gh
   ```

2. **Authenticate:**
   ```bash
   gh auth login
   ```

3. **Create and push:**
   ```bash
   cd "/Users/goldie/workspace/MomCo/Request Portal"
   gh repo create momco-africa-portal --public --source=. --push
   ```

---

## Enable GitHub Pages (to host the portal)

After pushing to GitHub:

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Click **Pages** (left sidebar)
4. Under "Source":
   - Branch: **main**
   - Folder: **/ (root)**
   - Click **Save**
5. Wait a few minutes
6. Your portal will be live at:
   ```
   https://YOUR-USERNAME.github.io/momco-africa-portal/
   ```

---

## Quick Commands Reference

### Check current status
```bash
cd "/Users/goldie/workspace/MomCo/Request Portal"
git status
```

### View commit history
```bash
git log --oneline
```

### Add remote (one-time setup)
```bash
git remote add origin https://github.com/YOUR-USERNAME/REPO-NAME.git
```

### Push changes
```bash
git push origin main
```

### Pull latest changes
```bash
git pull origin main
```

---

## Making Future Changes

When you update the portal:

```bash
cd "/Users/goldie/workspace/MomCo/Request Portal"

# See what changed
git status

# Add changed files
git add .

# Commit with message
git commit -m "Your commit message here"

# Push to GitHub
git push origin main
```

---

## Current Repository Status

✅ Local git repository initialized
✅ All files committed
✅ Ready to push to GitHub

**Commit:** `64d075f - Initial commit: Trilingual MomCo Africa Event Request Portal`

**Files tracked:**
- index.html
- styles.css
- script.js
- translations.js
- language.js
- README.md
- Online Submission System Design.md
- Group Launch Expectations.pdf
- Leadership Training Expectations.pdf
- Africa Budget Request & Report Forms.docx
- .gitignore
- add-i18n.py

---

## Troubleshooting

**"remote origin already exists"**
```bash
git remote remove origin
git remote add origin YOUR-NEW-URL
```

**"Push rejected" or "non-fast-forward"**
```bash
git pull origin main --rebase
git push origin main
```

**Need to change repository URL**
```bash
git remote set-url origin NEW-URL
```

---

## Next Steps

1. ✅ Create GitHub repository
2. ✅ Add remote origin
3. ✅ Push code
4. ⬜ Enable GitHub Pages (if hosting online)
5. ⬜ Share URL with team

---

**Need Help?**
- GitHub Docs: https://docs.github.com/en/get-started
- GitHub Pages: https://pages.github.com/
