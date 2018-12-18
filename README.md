# Open browser

Very simple utility function that opens the browser, with some smartness built in:

- It uses the `BROWSER` environment variable to determine what browser to open.
- `BROWSER` can be set to a script file name ending in `.js` to call that script with the URL instead of opening the browser.
- When using Google Chrome on Mac and a tab with the same URL is already open, it will focus and reload that tab instead of opening a new tab.

## Installation

```sh
npm i @includable/open-browser
```

## Usage

```js
const openBrowser = require('@includable/open-browdser')

openBrowser('https://www.includable.com/')
```
