/* global describe, xdescribe, it */
/* eslint-disable no-undef */

// require('@fatso83/mini-mocha').install()
var assert = require('chai').assert
var { main, testFunc } = require('../src/app.js')
var sinon = require('sinon')
var referee = require('@sinonjs/referee')
var assertTrue = referee.assert
var jsdom = require('jsdom')
var JSDOM = jsdom.JSDOM
var window = (new JSDOM()).window
var document = (new JSDOM('')).window
// var jQuery = require('jquery')(window)
global.document = document





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

// describe('testFunc', function() {
//   it('should call subscribers on publish', function() {
//     var callback =  sinon.spy
//     testFunc.subscribe('message', callback)
//     testFunc.publishSync('message')

//     assertTrue(callback.called)
//   })
// })

before(function() {
  global.document = { addEventListener: sinon.stub() }
  global.self = { emit: sinon.stub() }

  main()

  this.callback =  document.addEventListener.getCalls()[0].args[1]
  this.eventType = document.addEventListener.getCalls()[0].args[1]
})

it('should use appropriate args', function() {
  this.eventType.should.eql('chang')
  this.callback.should.be.a('function')
})

