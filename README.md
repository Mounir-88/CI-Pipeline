# React + Vite CI/CD Pipeline

![React CI/CD](https://github.com/mounir-88/CI-Pipeline/actions/workflows/ci.yml/badge.svg)
![Deploy](https://github.com/mounir-88/CI-Pipeline/actions/workflows/deploy.yml/badge.svg)

## 🚀 Live Demo
[Click here to view the deployed app](https://mounir-88.github.io/CI-Pipeline/)

## ⚙️ Pipeline Architecture
This project uses GitHub Actions with two workflows:
- `ci.yml`: runs build and tests
- `deploy.yml`: deploys to GitHub Pages

Stages:
- 🧱 Build (Vite)
- ✅ Test (`npm run test`)
- 🚀 Deploy (`gh-pages`)

## 🛠 Troubleshooting

- **Blank page?** Check `vite.config.js` base path.
- **Images broken?** Use dynamic `import` or `new URL(...)` syntax.
- **CI fails?** Ensure correct Node version and all dependencies.

