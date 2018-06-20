# vue-ce-test

**Example repo to demonstrate [Issue#130 of vue-custom-element](https://github.com/karol-f/vue-custom-element/issues/130)**

1. Build source: `yarn build`
2. Serve the example on port 9080: `yarn serve`

Issue: IE9/IE10: Only the first two instances of Vue custom elements are initialised

- It seems that the issue only occurs when babelPolyfill.js is included on the page.
- Comment out the `babelPolyfill.js` script in `src/index.html` and the Vue CE's will work in IE 9/10.
