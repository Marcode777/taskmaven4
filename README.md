to use this app, git checkout tertiary (because the full working app is on tertiary branch code), then webpack-dev-server, it should appear in localhost:8080



# taskmaven4
had to manually npm install --save 
    "lodash": "^4.16.3",
    "react": "^15.3.2",
    "react-dom": "^15.3.2"
also had to manually npm install --save-dev the following
    "babel-core": "^6.17.0",
    "babel-loader": "^6.2.5",
    "babel-preset-es2015": "^6.16.0",
    "babel-preset-react": "^6.16.0",
    "react-hot-loader": "^3.0.0-beta.5",
    "webpack": "^1.13.2",
    "webpack-dev-server": "^1.16.1"


the key was react-hot-loader "^3.0.0-beta.5"  this specific version made it work!

LEFT OFF AT 47:33




to use this app, on terminal, run webpack-dev-server and app should appear on localhost:8080

npm init -y to create package.json

npm i -S react, react-dom    (npm i -S, is a quick way of npm install --save)

npm i -D babel-core babel-loader babel-preset-es2015 babel-preset-react react-hot-loader webpack webpack-dev-server                    (npm i -D, is a quick way of npm install --save-dev)

then npm i -g webpack webpack-dev-server (npm i -g, is a quick way of npm installing globally)

sidenote: for the webpack.config.js file, differences are in loaders, instead of react-hot it is react-hot-loader/webpack, but here I revised it yet again from react-hot-loader/webpack to react-hot-loader

