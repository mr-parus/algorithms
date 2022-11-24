// https://leetcode.com/problems/concatenated-words/
// 472. Concatenated Words
// #array #string #dynamic_programming #depth-first_search #trie
// #hard

class Node {
  constructor(ch, isLief = false) {
    this.ch = ch;
    this.isLief = isLief;
    this.children = {};
  }
}

class Trie {
  root = new Node('');

  add(word) {
    let cursor = this.root;

    for (let ch of word) {
      if (!(ch in cursor.children)) {
        cursor.children[ch] = new Node(ch);
      }

      cursor = cursor.children[ch];
    }

    cursor.isLief = true;
  }

  canSplit(word, suffixStart = 0, slicesCount = 0) {
    if (word.length === suffixStart) {
      return slicesCount > 1;
    }

    let node = this.root;

    for (let i = suffixStart; i < word.length; i++) {
      node = node.children[word[i]];
      if (!node) return false;

      if (node.isLief && this.canSplit(word, i + 1, slicesCount + 1)) {
        return true;
      }
    }
    return false;
  }
}

/**
 * @param {string[]} words
 * @return {string[]}
 */
var findAllConcatenatedWordsInADict = function (words) {
  words = words.sort((a, b) => a.length - b.length);

  const result = [];
  const trie = new Trie();

  for (const word of words) {
    if (trie.canSplit(word)) result.push(word);
    else trie.add(word);
  }

  return result;
};

console.log(
  findAllConcatenatedWordsInADict([
    'dogcatsdog',
    'catsdogcats',
    'ratcatdogcat',

    'cats',
    'cat',
    'rat',
    'dog',
    'hippopotamuses',
  ]),
);
