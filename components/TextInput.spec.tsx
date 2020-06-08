import { Input } from "antd"
import { mount, shallow } from "enzyme"
import { lorem } from "faker"
import React from "react"
import { spy } from "sinon"
import TextInput from "./TextInput"

test("set TextArea value", () => {
  const value = lorem.words()
  const dom = shallow(<TextInput value={value} onChange={() => undefined} />)
  expect(dom.find(Input.TextArea).first().prop("value")).toEqual(value)
})

test("TextArea onChange callback", () => {
  const value = lorem.words()
  const onChangeCallback = spy()
  mount(<TextInput value={""} onChange={onChangeCallback} />)
    .find(Input.TextArea)
    .first()
    .simulate("change", { target: { value } })
  expect(onChangeCallback.calledWith(value)).toBeTruthy()
})

test("Sample value", () => {
  const sampleValue = lorem.words()
  const dom = shallow(<TextInput sampleValue={sampleValue} />)
  expect(dom.find(Input.TextArea).first().prop("placeholder")).toEqual(
    sampleValue
  )
})
