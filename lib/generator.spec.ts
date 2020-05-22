import { lorem } from "faker"
import { generate } from "./generator"

test("generate empty returns undefined", () => {
  expect(generate([])).toBe(undefined)
})

test("generate a word returns word", () => {
  const word = lorem.word()
  expect(generate([word])).toBe(word)
})
