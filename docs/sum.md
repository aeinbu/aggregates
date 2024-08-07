# sumOf
Used to get the sum of a property in an array.

For an array of a simple types, use
[sum](./sum.md#sum) instead.

**Syntax**:  
`sumBy(valueSelectorFn)`  
Usage in a reducer:  
`array.reduce(sum(valueSelectorFn), defaultValue)`

**Arguments**:  
- `valueSelectorFn` is a used to extract the value to compare from the object in the array.  
  `valueSelectorFn` is of the form `(obj) => any`
- `defaultValue` is returned when `array` is empty


# sum
Used to get the sum of all elements in an array.


**Syntax**:  
`sum()`  
Usage in a reducer:  
`array.reduce(sum(), defaultValue)`

**Arguments**:  
- `defaultValue` is returned when `array` is empty


# Examples

**Usage**:
```javascript
const testData = [
    { date: '2023-11-06', hours: 2.5 },
    { date: '2023-11-07', hours: 6 },
    { date: '2023-11-08', hours: 7,5 }
]

testData.reduce(sumOf(x => x.hours), null) // returns 16
testData.reduce(sum(), null) // fails, since it is not a array of simple types
```

```javascript
const testData = [ 10, 30, 20]

testData.reduce(sum(), null) // returns 60
```

**Remarks**:


**See also**:
- [unit tests for sumBy and sum](../tests/sum.tests.ts)
