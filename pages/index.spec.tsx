import { Switch } from "antd"
import { mount, shallow } from "enzyme"
import { lorem } from "faker"
import React from "react"
import OutputView from "../components/OutputView"
import TextInput from "../components/TextInput"
import { generate } from "../lib/generator"
import IndexPage from "./index"

test("Use non-capturing group defaults to true", () => {
  const dom = shallow(<IndexPage />)
  expect(dom.find(Switch).prop("checked")).toBeTruthy()
})

test("Regular expression from input", () => {
  const input = lorem.lines()
  const dom = mount(<IndexPage />)
  dom.find(TextInput).simulate("change", { target: { value: input } })
  expect(dom.find(OutputView).prop("value")).toEqual(
    generate(input.split("\n"), true)
  )
})

test("Regular expression from input with capturing group", () => {
  const input = lorem.lines()
  const dom = mount(<IndexPage />)
  dom.find(TextInput).simulate("change", { target: { value: input } })
  dom.find(Switch).simulate("click")
  expect(dom.find(OutputView).prop("value")).toEqual(
    generate(input.split("\n"), false)
  )
})
