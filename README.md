# Prof. Sunita Ramesh Patil — Academic & Research Portfolio

Academic and research portfolio website for **Prof. Sunita Ramesh Patil**, Assistant Professor in Department of Computer Engineering at Dr. D. Y. Patil Institute of Technology (DYPIT), Pimpri, Pune.

## Highlights
- **23 Published Patents** (Indian Patent Office)
- **45+ Publications** (Elsevier Q1 MethodsX, IEEE proceedings, Scopus & WOS indexed)
- **Author of University Textbook:** *"Augmented & Virtual Reality"* (SPPU Course 2019 Pattern, Technical Publications, ISBN: 9789355850744)
- **Durga Shakti Awardee (2025)** & **IEEE ICCUBEA Best Paper Award (2024)**
- **1st Rank in Master of Engineering** (University of Pune)
- **Journal Editor:** Scienxt Journal of Neural Networks and Deep Learning

---

## Why did GitHub Pages look blank? (And how it is fixed)

A blank white page on GitHub Pages occurs due to two common reasons:

### 1. Relative Asset Paths (`base: './'`) — FIXED
By default, Vite points to `/assets/...` (root domain). On GitHub Pages, your site lives in a subfolder (`https://<username>.github.io/<repository-name>/`), which caused assets to return `404 Not Found`.
- **Status:** **Fixed!** `vite.config.ts` now uses `base: './'`, ensuring all stylesheets, scripts, and images load correctly regardless of repository name.

### 2. GitHub Pages Source Setting
If your GitHub Pages settings are set to **"Deploy from a branch (main / root)"**, GitHub tries to serve the unbuilt `src/main.tsx` file directly, which web browsers cannot execute.

**The Fix in 2 Steps:**
1. In your GitHub repository, click **Settings** → **Pages** (in the left sidebar).
2. Under **Build and deployment > Source**, choose:
   👉 **GitHub Actions** (NOT "Deploy from a branch")
3. We have provided `.github/workflows/deploy.yml` in this repository. Once you select **GitHub Actions**, GitHub will automatically build and publish your site with zero blank screens!

---

## Quick Deployment Commands

```bash
# 1. Commit and push the latest fixes
git add .
git commit -m "Fix GitHub Pages blank screen with relative paths and GitHub Actions workflow"
git push origin main
```
