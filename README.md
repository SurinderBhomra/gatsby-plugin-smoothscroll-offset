# gatsby-plugin-smoothscroll-offset

This plugin has been adapted from the '[gatsby-plugin-smoothscroll](https://www.npmjs.com/package/gatsby-plugin-smoothscroll)' plugin that allows for an offet to be set on the scroll to position.

## How To Install

```bash
# npm
npm install gatsby-plugin-smoothscroll-offset
```

## When To Use This Plugin?

When you want a smooth scroll behavior with an optional offet position.

## Examples of Usage

The plugin contains a `smoothScrollTo` helper function that can be imported onto the page:

```js
// This could be in your `pages/index.js` file.

import smoothScrollTo from "gatsby-plugin-smoothscroll-offset";
```

Then use it as an `onClick` event handler:

```html
<!-- Without offset -->
<button onClick={() => smoothScrollTo('#some-id')}>My link without offset</button>

<!-- With offset of 80px -->
<button onClick={() => smoothScrollTo('#some-id', 80)}>My link with offset</button>
```

Be aware that `smoothScrollTo` uses [`document.querySelector()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector) under the hood, so make sure to respect its syntax.