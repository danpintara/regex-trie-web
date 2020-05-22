import { lorem } from "faker"
import RegexTrie from "regex-trie"
import { generate } from "./generator"

test("generate undefined regexp. when input is undefined", () => {
  expect(generate([])).toBe(undefined)
})

test("generate single word regexp. when input is a word", () => {
  const word = lorem.word()
  expect(generate([word])).toBe(word)
})

test("generate regexp. from input", () => {
  const words = lorem.words().split(" ")
  const trie = RegexTrie()
  words.forEach((word) => trie.add(word))

  expect(generate(words)).toBe(trie.toString())
})

test("generate regexp. with capturing group if configured", () => {
  const prefix = lorem.word()
  const words = lorem
    .words()
    .split(" ")
    .map((word) => `${prefix}${word}`)

  expect(generate(words, false)).not.toContain("(?:")
})
