# first-value

Retrieves the first value of an Array, Iterator, Object, Map, Set, or Typed Array.

Returns `undefined` if the collection is empty.

## Installation

Requires [Node.js](https://nodejs.org/) 7.0.0 or above.

```bash
npm i first-value
```

## API

The module exports a single function.

### Parameter

Bindable: `c` (Array, Iterator, Object, Map, Set, or Typed Array): The collection of entries/values.

### Return Value

The first value in the collection.

## Example

```javascript
const firstValue = require('first-value')

firstValue([1, 2, 3]) // 1
firstValue({a: 1, b: 2}) // 1
firstValue(new Set([1, 2, 3])) // 1
firstValue(new Map([['a', 1], ['b', 2]])) // 1

firstValue([]) // undefined
```

## Related

* [last-value](https://github.com/lamansky/last-value)
