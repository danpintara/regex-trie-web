import { shallow } from "enzyme"
import { lorem } from "faker"
import React from "react"
import OutputView from "./OutputView"

test("Text value is shown on screen", () => {
  const value = lorem.words()
  const dom = shallow(<OutputView value={value} />)
  expect(dom.text()).toContain(value)
})