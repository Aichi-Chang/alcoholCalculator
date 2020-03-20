/* global describe, xdescribe, it */
/* eslint-disable no-undef */

var jsdom = require('jsdom-global')()
var assert = require('chai').assert
var main = require('../src/app.js')
var sinon = require('sinon')

it('should return true', () => {
  assert.equal(true, true)
})

describe('main', function() {

  describe('#log()', function() {
    it('test log', () => {
      const consoleSpy = sinon.spy(console, 'log')
      log()

      sinon.assert.calledWith(consoleSpy, 'Hello world')
    })
  })
  
})