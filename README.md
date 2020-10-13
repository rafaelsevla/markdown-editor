## What's inside it?

1. Webpack 2;
* Babel;
* React hot loader;
* HTML and CSS generated automatically by webpack;
* Jest for tests and Chai for assertions;
* Storybook to create isolatelly components' stories
* Async/await
* Webpack tree shaking!

## Dependencies:

 - Node.js `>=` v6;

## Up and running

- Clone this repository: `git clone git@github.com:rafaelsevla/markdown-editor.git`;
- Remove `.git` directory;
- Install dependencies: `yarn` (or `npm i`);
- Run `yarn dev` (or `npm run dev`) to develop on `http://localhost:3000`
- Run `yarn build` (or `npm run build`) for production build (files will be generated on `dist` directory)

## Scripts

- `yarn dev (or npm run dev)`: Starts the application in development mode
- `yarn test (or npm test)`: Run tests once
- `yarn test:watch (or npm run test:watch)`: Run tests in watch mode
- `yarn build (or npm run build)`: Build project to production
- `yarn storybook (or npm run storybook)`: Run Storybook on 6006 port
- `yarn build-storybook`: Build Storybook to static files
- `yarn update-packages`: Update all packages to the latest version
