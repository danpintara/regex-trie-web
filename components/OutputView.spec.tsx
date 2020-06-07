import { shallow } from "enzyme"
import { lorem } from "faker"
import React from "react"
import OutputView from "./OutputView"

test("Text value is shown on screen", () => {
  const value = lorem.words()
  const dom = shallow(<OutputView value={value} />)
  expect(dom.text()).toContain(value)
})

test("Sample is shown if value is missing", () => {
  const sampleValue = lorem.words()
  const dom = shallow(<OutputView sampleValue={sampleValue} />)
  expect(dom.contains(sampleValue)).toBeTruthy()
})

test("Show copy button", () => {
  const dom = shallow(<OutputView value={lorem.words()} />)
  expect(dom.exists("#copy")).toBeTruthy()
})
