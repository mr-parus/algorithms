// https://leetcode.com/problems/html-entity-parser/description/
// 1410. HTML Entity Parser
// #sting #hash_table
// medium

/**
 * @param {string} text
 * @return {string}
 */
var entityParser = function(text) {
    const map = {
        'quot': '"',
        'apos': "'",
        'amp': '&',
        'gt': '>',
        'lt': '<',
        'frasl': '/',
    }

    let i = 0;
    let result = '';

    while(i < text.length) {
        const char = text.charAt(i);
        if (char === '&') {
            const end = text.indexOf(';', i);
            const replace = map[text.substring(i+1, end)];
            if (replace) {
                result +=replace
                i = end + 1;
                continue;
            }
        }

        result += char;
        i++;
    }

    return result;
};
