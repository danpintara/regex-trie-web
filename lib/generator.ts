import escapeStringRegexp from "escape-string-regexp"
import RegexTrie from "regex-trie"

const nonCapturingRegexp = new RegExp(escapeStringRegexp("(?:"), "g")

function processRegexTrie(lines: string[]): string | undefined {
  const trie = RegexTrie()
  lines.forEach((line) => trie.add(line))
  return trie.toString()
}

export function generate(lines: string[], useNonCapturingGroup = true) {
  let result = processRegexTrie(lines)
  if (!useNonCapturingGroup) {
    result = result?.replace(nonCapturingRegexp, "(")
  }

  return result
}
