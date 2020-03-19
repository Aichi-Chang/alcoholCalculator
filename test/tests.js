/* global describe, xdescribe, it */
/* eslint-disable no-undef */

var chai = require('chai')
var assert = require('assert')
const app = require('/Users/phoebec/development/alcoholCalculator/src/app.js')
// var sinon = require('sinon')

it('should return true', () => {
  assert.equal(true, true)
})

it('correctly calculates the sum of 1 and 3', () => {
  assert.equal(app.add(1, 3), 4)
})