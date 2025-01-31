## FLUID in AngularJS v1:
https://stackblitz.com/edit/angularjs-pk4qxezt?file=home%2Fhome.controller.js

# For Github pages:
Make Sure Your package.json Contains the Build Command

"scripts": {
  "build": "your-build-command",  // Replace with your actual build command
  "deploy": "gh-pages -d dist"    // Optional, if you want to deploy manually
}

 "build": "ng build",

 Since AngularJS v1.x and Angular 2+ (which uses Angular CLI) are different frameworks, the command ng build is not applicable to AngularJS v1.x projects. AngularJS v1.x doesn't use Angular CLI, so you can't build it using ng build.

Use a Simple Web Server for Development
For AngularJS v1.x apps, you typically don't need a build process unless you're using a module bundler like Webpack or Gulp.


## Build for Production (Optional) -gh pages
If you're looking to "build" your AngularJS v1.x app for production (e.g., minify and bundle files), you can use a task runner like Gulp, Grunt, or Webpack to automate this process.

Gulp Example:
Here’s a quick example of how you can set up Gulp to build your AngularJS app

## (Optional) Using Webpack for AngularJS v1.x
If you prefer to use Webpack to bundle and minify your AngularJS app, you can configure Webpack in your project. Here's a simple configuration for a basic setup:

Install Webpack and its dependencies:
npm install --save-dev webpack webpack-cli webpack-dev-server

then

npm install --save-dev babel-loader @babel/core @babel/preset-env

Run the Webpack build: Add the build script to your package.json:

"scripts": {
  "build": "webpack --mode production",
  "start": "webpack serve --mode development"
}
Now, you can build the app with:
npm run build

run it with:
npm run start

If you need to "build" your AngularJS app, 
you can either use simple tools like http-server for local development or
task runners like Gulp or Webpack for more complex tasks like minification and bundling.

Add gh-pages to .gitignore
To avoid committing the gh-pages branch to your codebase, make sure you add it to your .gitignore file:
/gh-pages

Push Your Changes
Once you commit and push the .github/workflows/deploy.yml file to your repository, GitHub Actions will automatically trigger the deployment whenever changes are pushed to the master branch (or the branch you specified).

git add .github/workflows/deploy.yml
git commit -m "Set up GitHub Actions for deployment"
git push origin master

## The --base-href option is typically used in Angular CLI for setting the base URL of your app. Since you're using Webpack, you need to configure this differently.

Solution: Use the HtmlWebpackPlugin to Set base Href
You can use the HtmlWebpackPlugin to modify the base tag in your index.html file and set the base-href. Here's how you can do it:
npm install --save-dev html-webpack-plugin

The HtmlWebpackPlugin is responsible for generating an index.html file with the correct paths for your assets.
