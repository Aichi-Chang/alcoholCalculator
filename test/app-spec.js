/* global describe, xdescribe, it */
/* eslint-disable no-undef */

var jsdom = require('jsdom-global')()
var assert = require('chai').assert
var { testFunc } = require('../src/app.js')
var sinon = require('sinon')

it('should return true', () => {
  assert.equal(true, true)
})

it('logs Hello', () => {
  const log = sinon.spy(console, 'log')
  testFunc()
  if (!log.calledOnceWith('Hello')) {
    throw new Error('Log was not called')
  }
})