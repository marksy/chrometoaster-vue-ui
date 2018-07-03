# chrometoaster-vue-ui

> UI Library built in VueJS

## Commands

You can replace `yarn` with `npm run` here.

```bash
# build for production
yarn build

# development mode
yarn dev

# run unit tests
yarn test

# serve the bundled dist folder in production mode
yarn serve

# Storybook presentation layer
yarn storybook
```

## Polyfills

By default we only polyfill `window.Promise` and `Object.assign`. You can add more polyfills in `./src/polyfills.js`.

## Analyze bundle size

Run `yarn report` to get a report of bundle size which helps you:

- Realize what's really inside your bundle
- Find out what modules make up the most of it's size
- Find modules that got there by mistake
- Optimize it!

# TODO
- add snapshots to testing
- add more atomic components
- create CI pipeline


---

This project is generated by [create-vue-app](https://github.com/vue-land/create-vue-app).
