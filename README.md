# @aeinbu/aggregates

Lightweight and non-intrusive aggregate functions to use with array reducers

- The functions are lightweight, as they are small and don't make you bring along lots of functions you don't need.
- These functions run just as well in a browser as they do in nodejs.
- The package is non-intrusive, as it doesn't extend arrays adding new and non-standard methods to them.
  - This is done by having functions that you use with `.reduce(...)` on arrays.
- @types are included for better discoverability during development when you use editors with javascript/typescript intellisence support


## How to install <img alt="npm (scoped)" src="https://img.shields.io/npm/v/@aeinbu/aggregates">

With npm
```shell
npm install @aeinbu/aggregates
```
...or with yarn
```shell
yarn add @aeinbu/aggregates
```

## Quickstart
```javascript
import { maxBy, minOf, sumOf } from "@aeinbu/aggregates"

const capitals = [
    { name: 'Oslo', population: 709000 },
    { name: 'Stockholm', population: 985000 },
    { name: 'Copenhagen', population: 657000 }
]

capitals.reduce(maxBy(x => x.population), null)  // returns { name: 'Stockholm', population: 985000 }
capitals.reduce(minOf(x => x.population), null)  // returns 657000
capitals.reduce(sumOf(x => x.population), null)  // returns 2351000
```

## Documentation
For more documentation, follow these links:
- [min](./docs/min.md) for `minBy`, `minOf` and `min`
- [max](./docs/max.md) for `maxBy`, `maxOf` and `max`
- [sum](./docs/sum.md) for `sumOf` and `sum`

Also, look in the `tests` directory for more examples. The tests demonstrate at least another dozen different ways to use this library

## Semantic versioning
This package follows semantic versioning (See [semver.org](https://semver.org) for more info)

## License
This package is published under the MIT License. (See [LICENSE file](/LICENSE) for more info)
