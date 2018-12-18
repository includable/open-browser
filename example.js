const openBrowser = require('./index')

// Open browser...
openBrowser('https://www.includable.com/')

// Then test reloading of existing tab on Chrome (Mac only) instead of opening a new tab...
setTimeout(() => {
  openBrowser('https://www.includable.com/')
}, 5000)
