# Hi, this is my personal website! 🚀

My name is Steven, I am a mechatronics engineering student at the University of Waterloo. This repo contains the source code to my personal website. 

Checkout my site at: https://stevenf7.github.io/

## 🛠️ Development

To install dependencies: 
```bash
npm install
```

To run it locally: 
```bash
npm start
```

To build for production:
```bash
npm run build
```

## 🚀 Deployment

This site is automatically deployed using GitHub Actions. When you push to the `production` branch, it will:

1. ✅ Build the Gatsby site
2. ✅ Deploy to GitHub Pages
3. ✅ Update your live site

**No manual deployment needed!** Just push your changes to GitHub and they'll be live in a few minutes.

## 🔍 Quality Assurance

### Pull Request Checks
Every Pull Request automatically triggers a build check to ensure:
- ✅ Dependencies install correctly
- ✅ Gatsby builds successfully
- ✅ No breaking changes are introduced

This helps catch issues before they reach the main branch!

Manual Deployment
```bash
npm run deploy
```