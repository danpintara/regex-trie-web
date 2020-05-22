import RegexTrie from "regex-trie"

export function generate(lines: string[]) {
  const trie = RegexTrie()
  lines.forEach((line) => trie.add(line))

  return trie.toString()
}
