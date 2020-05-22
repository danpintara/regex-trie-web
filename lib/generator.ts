import escapeStringRegexp from "escape-string-regexp"
import RegexTrie from "regex-trie"

const nonCapturingRegexp = new RegExp(escapeStringRegexp("(?:"), "g")

export function generate(lines: string[], useNonCapturingGroup = true) {
  const trie = RegexTrie()
  lines.forEach((line) => trie.add(line))

  let result = trie.toString()
  if (!useNonCapturingGroup) {
    result = result?.replace(nonCapturingRegexp, "(")
  }

  return result
}
