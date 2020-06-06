import { Switch } from "antd"
import { mount, shallow } from "enzyme"
import { lorem } from "faker"
import React from "react"
import OutputView from "../../components/OutputView"
import TextInput from "../../components/TextInput"
import { generate } from "../../lib/generator"
import IndexPage from "../../pages/index"

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

test("Show sample input", () => {
  const dom = mount(<IndexPage />)
  expect(dom.find(TextInput).prop("sampleValue")).not.toBeFalsy()
})

test("Show sample output", () => {
  const dom = mount(<IndexPage />)
  const sampleInput = dom.find(TextInput).prop("sampleValue")
  expect(dom.find(OutputView).prop("sampleValue")).toEqual(
    generate(sampleInput.split("\n"), true)
  )
})

test("Show sample output with capturing group", () => {
  const dom = mount(<IndexPage />)
  const sampleInput = dom.find(TextInput).prop("sampleValue")
  dom.find(Switch).simulate("click")
  expect(dom.find(OutputView).prop("sampleValue")).toEqual(
    generate(sampleInput.split("\n"), false)
  )
})
