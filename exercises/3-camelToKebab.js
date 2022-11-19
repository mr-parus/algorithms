'use strict'
/* # Exercice: Camel To Kebab
 *
 * ## Explanation:
 * You must code a function that transforms a string from camelCase (see Further Notice) to
 * kebab-case (see Further Notice). This function must not break abreviations.
 *
 * ## Example:
 *```
 *camelToKebab('CamelCaseString') === 'camel-case-string'
 *camelToKebab('CamelCaseStringWithABREV') === 'camel-case-string-with-abrev'
 *camelToKebab('CamelCaseStringWithABREVInCenter') === 'camel-case-string-with-abrev-in-center'
 *```
 *
 * ## Expected Time
 * You should spend around 15 minutes on this exercice
 *
 * ## Further Notice
 * - You have more examples in <root>/validations/3-camelToKebab.validation.js
 * - See [camelCase](https://en.wikipedia.org/wiki/Camel_case)
 * - See [kebabCase](http://wiki.c2.com/?KebabCase)
 */

function camelToKebab(str) {
  const chunks = [];

  let chunk = '';
  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (/[a-z]/.test(char)) {
      chunk += char;
      continue;
    }

    if (/[A-Z\d]/.test(char)) {
      if (chunk.length) chunks.push(chunk);

      // TODO skip for abrvs
      // let tempI = i+1;
      // while (str[tempI] === str[tempI].toUpperCase()) tempI++;
      // // let i = tempI-1;
      // chunk = str.substring(i, tempI)

      chunk = char.toLowerCase();
    }
  }

  if (chunk.length) chunks.push(chunk);

  return chunks.join('-');
  // return str.replace(/([a-z\d])([A-Z])/g, '$1-$2').toLowerCase();
}

console.log(camelToKebab('camelCase'))

module.exports = camelToKebab
