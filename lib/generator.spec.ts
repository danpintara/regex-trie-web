import { lorem } from "faker"
import RegexTrie from "regex-trie"
import { generate } from "./generator"

test("generate empty returns undefined", () => {
  expect(generate([])).toBe(undefined)
})

test("generate a word returns word", () => {
  const word = lorem.word()
  expect(generate([word])).toBe(word)
})

test("generate input returns regular expression", () => {
  const words = lorem.words().split(" ")
  const trie = RegexTrie()
  words.forEach((word) => trie.add(word))

  expect(generate(words)).toBe(trie.toString())
})

test("generate regular expression with capturing group if configured", () => {
  const prefix = lorem.word()
  const words = lorem
    .words()
    .split(" ")
    .map((word) => `${prefix}${word}`)

  expect(generate(words, false)).not.toContain("(?:")
})
