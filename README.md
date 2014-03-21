# fs SyncSafe

A wrapper around fs.readFileSync that captures the exception and returns
an empty string if file is not found, also logs the exception to a
error log object or console.log if an error log object is not injected.

It also converts a buffer into a string.  

## Why?

This is primarily good for reading files for configuration purposes, like
ssl certs, and any other dynamically placed config file by your server automation.

## Install

```
npm install fs-syncsafe
```

## API

``` js
function ss(name, [logfn]) return [string|empty]
```

## Usage

``` js
var ss = require('fs-syncsafe');

var foo = ss('./README.md');
console.log(foo);
```

## Contributions

Pull Request Welcome.

## License

MIT


