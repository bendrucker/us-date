'use strict'

var extend = require('xtend')
var assert = require('assert-ok')
var fill = require('zero-fill')(2)

var defaults = {
  separator: '/',
  pad: false
}

module.exports = function usDate (now, options) {
  now = now || new Date()
  assert(now instanceof Date, 'date is required')

  if (typeof options === 'string') {
    options = {separator: options}
  }
  options = extend(defaults, options || {})

  return [
    getValue('Month') + 1,
    getValue('Date'),
    getValue('FullYear')
  ]
  .map(format)
  .join(options.separator)

  function format (value) {
    return (options.pad ? fill : String)(value)
  }

  function getValue (property) {
    return now['get' + (options.utc ? 'UTC' : '') + property]()
  }
}

