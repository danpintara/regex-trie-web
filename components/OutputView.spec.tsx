import clipboard from "clipboard-polyfill"
import { mount, shallow } from "enzyme"
import { lorem } from "faker"
import React from "react"
import { stub } from "sinon"
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
  const dom = mount(<OutputView value={lorem.words()} />)
  expect(dom.exists("#btn-copy")).toBeTruthy()
})

test("Hide copy button if value is missing", () => {
  const dom = mount(<OutputView />)
  expect(dom.exists("#btn-copy")).toBeFalsy()
})

test("Copy button functionality", () => {
  const value = lorem.words()
  const writeTextStub = stub(clipboard, "writeText").resolves()
  const dom = mount(<OutputView value={value} />)
  dom.find("#btn-copy").first().simulate("click")
  expect(writeTextStub.calledWith(value)).toBeTruthy()
})
