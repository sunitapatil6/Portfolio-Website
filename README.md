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

## Deploying to GitHub Pages (Static Hosting)

This portfolio is completely static. Follow these quick steps to host it for free on GitHub Pages:

### Option A: Automatic Deployment with GitHub Actions (Recommended)

1. Create a repository on GitHub (e.g., `sunita-patil-portfolio` or `<your-username>.github.io`).
2. Push this project to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/<YOUR-GITHUB-USERNAME>/<YOUR-REPO-NAME>.git
   git push -u origin main
   ```
3. In your GitHub repository:
   - Go to **Settings** → **Pages**.
   - Under **Build and deployment > Source**, select **GitHub Actions**.
   - Your site will automatically build and publish!

### Option B: Build and Deploy the Static `dist` Folder

1. Run the build command locally:
   ```bash
   npm install
   npm run build
   ```
2. The static files will be generated in the `dist/` directory.
3. You can deploy using the `gh-pages` npm package:
   ```bash
   npx gh-pages -d dist
   ```

### Customizing Your Photo

Your uploaded passport photo is included in the assets. To update or replace it at any time in the future, simply place your photo at `public/profile.jpg` and redeploy.
