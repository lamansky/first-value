'use strict'

const assert = require('assert')
const firstValue = require('.')

describe('firstValue()', function () {
  it('should return the first item in an Array', function () {
    assert.strictEqual(firstValue(['test']), 'test')
  })

  it('should return undefined for an empty Array', function () {
    assert.strictEqual(typeof firstValue([]), 'undefined')
  })

  it('should return the first value of an iterator', function () {
    assert.strictEqual(firstValue([2, 3, 4][Symbol.iterator]()), 2)
  })

  it('should return undefined for an empty iterator', function () {
    assert.strictEqual(typeof firstValue([][Symbol.iterator]()), 'undefined')
  })

  it('should return the first value in a Map', function () {
    assert.strictEqual(firstValue(new Map([['key', 'value']])), 'value')
  })

  it('should return undefined for an empty Map', function () {
    assert.strictEqual(typeof firstValue(new Map()), 'undefined')
  })

  it('should return the first value in an Object', function () {
    assert.strictEqual(firstValue({key: 'value'}), 'value')
  })

  it('should return undefined for an empty Object', function () {
    assert.strictEqual(typeof firstValue({}), 'undefined')
  })

  it('should return the first item in a Set', function () {
    assert.strictEqual(firstValue(new Set(['test'])), 'test')
  })

  it('should return undefined for an empty Set', function () {
    assert.strictEqual(typeof firstValue(new Set()), 'undefined')
  })

  it('should return the first item in a Typed Array', function () {
    assert.strictEqual(firstValue(new Int8Array(new ArrayBuffer(4))), 0)
  })

  it('should support the bind operator', function () {
    assert.strictEqual(firstValue.call([1, 2, 3]), 1)
  })
})
