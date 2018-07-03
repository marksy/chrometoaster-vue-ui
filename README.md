# chrometoaster-vue-ui

> UI Library built in VueJS. Inspired by [GOV.UK React Compoonent Library](https://github.com/UKHomeOffice/govuk-react)


## Commands

You can replace `yarn` with `npm run` here.

### Build for production
```bash
yarn build
```
### Development mode
```bash
yarn dev
```
### Run unit tests (with snapshots)
```bash
yarn test
```
### Serve the bundled dist folder in production mode
```bash
yarn serve
```
### Storybook presentation layer
```bash
yarn storybook
```
### Create a component
> To create a new component use lower-kebab case:
```bash
yarn create-component `component-name`
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
- ~add snapshots to testing~
- add code coverage
- add more atomic components
- create CI pipeline


---

This project is generated by [create-vue-app](https://github.com/vue-land/create-vue-app).
