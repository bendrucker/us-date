'use strict'

var test = require('tape')
var usDate = require('./')

test(function (t) {
  var offset = new Date().getTimezoneOffset()
  if (offset > 0) {
    t.equal(usDate(new Date(0)), '12/31/1969')
  } else {
    t.equal(usDate(new Date(0)), '1/1/1970')
  }

  t.end()
})
