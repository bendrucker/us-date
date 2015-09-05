# us-date [![Build Status](https://travis-ci.org/bendrucker/us-date.svg?branch=master)](https://travis-ci.org/bendrucker/us-date)

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

#### `usDate([now], [separator])` -> `string`

##### now

Type: `date`  
Default: `new Date()`

The date to use for formatting.

##### separator

Type: `string`  
Default: `/`

The date separator.


## License

MIT © [Ben Drucker](http://bendrucker.me)
