'use strict'

var test = require('tape')
var usDate = require('./')

var date = new Date('2/2/2002')

test(function (t) {
  t.equal(usDate(date), '2/2/2002')
  t.equal(usDate(date, {pad: true}), '02/02/2002')

  t.end()
})
