class TrieNode {
  public counts: Record<string, number> = {};
  public children: Record<string, TrieNode> = {};
  public isWord: boolean = false;

  private getByPath(path: string): TrieNode | undefined {
    let current: TrieNode | undefined = this;

    while (current && path.length) {
      current = current.children[path[0]];
      path = path.substring(1);
    }

    return current;
  }

  private getWords(prefix = ''): string[] {
    const result = this.isWord ? [prefix] : [];

    for (const [key, node] of Object.entries(this.children)) {
      result.push(...node.getWords(prefix + key));
    }

    return result;
  }

  getWordsStartingWith(s: string): string[] {
    const node = this.getByPath(s);

    if (!node) {
      return [];
    }

    return node.getWords(s);
  }

  static build(words: string[]): TrieNode {
    const result = new TrieNode();

    for (const word of words) {
      let current = result;

      for (const letter of word.split('')) {
        if (!current.children[letter]) {
          current.children[letter] = new TrieNode();
          current.counts[letter] = 0;
        }

        current.counts[letter] += 1;
        current = current.children[letter];
      }

      current.isWord = true;
    }

    return result;
  }
}

function autoComplete(words: string[], s: string): string[] {
  return TrieNode.build(words).getWordsStartingWith(s) || [];
}

console.log(autoComplete(['dog', 'dodge', 'cat', 'docs'], 'do'));
