import { generate } from "./generator"

test("generate empty returns undefined", () => {
  expect(generate([])).toBe(undefined)
})
