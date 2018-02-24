'use strict'

const supportBindOperator = require('sbo')
const values = require('values-iterator')

module.exports = supportBindOperator(c => values(c).next().value)
