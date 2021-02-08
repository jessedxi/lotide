# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @ujessedxi/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

`head(array)`: returns first index of an array
`tail(array)`: returns the tail of the array - all but first index
`middle(array)`: returns middle index(es) of an array
`assertEqual(actual, expected)`: tested strict equality between values
`assertObjectsEqual(actual, expected)`: reports results of eqObjects
`assertArraysEqual(actual, expected)` : reports results of eqArrays
`countLetter(string)`: counts how many of each letter is in a string
`countOnly(allItems, itemsToCount)`: counts specified items from allItems data
`eqObjects(object1, object2)`: tests two objects for equality
`findKey(object, callback)`: finds specified key within object by callback parameters
`findKeyByValue(object, value)`: finds key within object by specified value
`letterPositions(sentence)`: returns the index of characters within a string(sentence)
`map(array, cb)`: returns data from array based on cb(callback) parameters
`eqArrays(array1, array2)`: tests equality between two arrays
`takeUntil(array, callback)`: removes data up until position of array as determined by callback parameters
`without(source, itemsToRemove)`: removes specified items from source