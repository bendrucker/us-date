# us-date [![Build Status](https://travis-ci.org/bendrucker/us-date.svg?branch=master)](https://travis-ci.org/bendrucker/us-date) [![Greenkeeper badge](https://badges.greenkeeper.io/bendrucker/us-date.svg)](https://greenkeeper.io/)

> Format dates as US M/D/Y strings


## Install

```
$ npm install --save us-date
```


## Usage

```js
var usDate = require('us-date')

usDate(new Date(0))
//=> 1/1/1970
```

## API

#### `usDate([now], [options])` -> `string`

##### now

Type: `date`  
Default: `new Date()`

The date to use for formatting.

##### options

Type: `object` / `string`  
Default: `{separator: '/', pad: false, utc: false}`

Set `pad` to always use two digit month/day values (`01/01/2000`). If `options` is a string, it will be treated as the separtor.


## License

MIT © [Ben Drucker](http://bendrucker.me)
