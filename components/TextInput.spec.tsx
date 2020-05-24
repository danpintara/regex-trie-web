import { shallow } from "enzyme"
import { lorem } from "faker"
import React from "react"
import TextInput from "./TextInput"

test("set TextArea value", () => {
  const value = lorem.words()
  const dom = shallow(<TextInput value={value} onChange={() => undefined} />)
  expect(dom.first().prop("value")).toEqual(value)
})
