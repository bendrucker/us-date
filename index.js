'use strict'

var assert = require('assert')

module.exports = function usDate (now, separator) {
  now = now || new Date()
  separator = separator || '/'

  assert(now instanceof Date)

  return [now.getMonth() + 1, now.getDate(), now.getFullYear()].join(separator)
}
