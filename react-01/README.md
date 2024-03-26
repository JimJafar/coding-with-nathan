# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Dependencies

When you first check out this code, you need to install your dependencies:

```
cd react-01
npm install
```

That will install all the libraries from the `dependencies` section of `package.json` into `node_modules`.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Don't worry about this for now.

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Don't worry about this for now.

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Development

### Adding a new page

Add a file to `src/routes/`.

Import that into `src/index.js` and add a `path` section like we did for `esther`. 

### Adding a new component

Add a file to `src/components` and import that into whichever page you want. See `TopMenu` for an example.

## Learn More

To learn React, check out the [React documentation](https://reactjs.org/).

