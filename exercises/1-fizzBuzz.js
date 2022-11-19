'use strict'
/* # Exercice: Fizz Buuz
 *
 * ## Explanation:
 * You must code a function that given an integer n will output an array of length n such that:
 *  - On indexes multiple of 3 it contains 'fizz'
 *  - On indexes multiple of 5 it contains 'buzz'
 *  - On indexes multiple of 3 and 5 it contains 'fizzbuzz'
 *  - On every other index it contains ''
 *
 * ## Example:
 *```
 *fizzBuzz(6) === ['fizzbuzz', '', '', 'fizz', '', 'buzz']
 *```
 *
 * ## Expected Time
 * You should spend around 5 minutes on this exercice
 *
 * ## Further Notice
 * You have more examples in <root>/validations/1-fizzBuzz.validation.js
 */

function fizzBuzz(n) {
  const result = [];

  for (let i = 0; i < n;i++) {
    let word = ''
    if (i % 3 ===0) word+= 'fizz';
    if (i % 5 ===0) word+= 'buzz';

    result.push(word);
  }

  return result;
}

module.exports = fizzBuzz
