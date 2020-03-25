/* global describe, xdescribe, it */
/* eslint-disable no-undef */

// require('@fatso83/mini-mocha').install()
var assert = require('chai').assert
var { testFunc } = require('../src/app.js')
var sinon = require('sinon')
var referee = require('@sinonjs/referee')
var assertTrue = referee.assert
var jsdom = require('jsdom')
var JSDOM = jsdom.JSDOM
var window = (new JSDOM()).window
var document = (new JSDOM('')).window
var fake = sinon.fake()
var sandbox = require('sinon').createSandbox()
global.document = document


describe('blahhhh', function() {

  it('logs Hello', () => {
    const log = sinon.spy(console, 'log')
    testFunc()
    if (!log.calledOnceWith('Hello')) {
      throw new Error('Log was not called')
    }
    // sinon.assert.calledWith(log, 'Hello')
  })

  
  afterEach(() => {
    // Restore the default sandbox here
    sinon.restore()
  })

})





