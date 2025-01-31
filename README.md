## FLUID in AngularJS v1:
https://stackblitz.com/edit/angularjs-pk4qxezt?file=home%2Fhome.controller.js

# For Github pages:
Make Sure Your package.json Contains the Build Command

"scripts": {
  "build": "your-build-command",  // Replace with your actual build command
  "deploy": "gh-pages -d dist"    // Optional, if you want to deploy manually
}

 "build": "ng build",
 
Add gh-pages to .gitignore
To avoid committing the gh-pages branch to your codebase, make sure you add it to your .gitignore file:
/gh-pages

Push Your Changes
Once you commit and push the .github/workflows/deploy.yml file to your repository, GitHub Actions will automatically trigger the deployment whenever changes are pushed to the master branch (or the branch you specified).

git add .github/workflows/deploy.yml
git commit -m "Set up GitHub Actions for deployment"
git push origin master

