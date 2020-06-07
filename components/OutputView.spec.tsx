import { Tooltip } from "antd"
import * as clipboard from "clipboard-polyfill"
import { mount, shallow } from "enzyme"
import { lorem } from "faker"
import React from "react"
import { act } from "react-dom/test-utils"
import { createSandbox } from "sinon"
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

const sandbox = createSandbox()
beforeEach(() => sandbox.restore())

test("Copy button functionality", async () => {
  const value = lorem.words()
  let resolveClipboardPromise: () => void
  const clipboardPromise = new Promise<void>((resolve) => {
    resolveClipboardPromise = resolve
  })
  const writeTextStub = sandbox
    .stub(clipboard, "writeText")
    .returns(clipboardPromise)
  const dom = mount(<OutputView value={value} />)
  dom.find("#btn-copy").first().simulate("click")
  await act(async () => {
    resolveClipboardPromise()
  })
  expect(writeTextStub.calledWith(value)).toBeTruthy()
})

test("Copy success message", async () => {
  let resolveClipboardPromise: () => void
  const clipboardPromise = new Promise<void>((resolve) => {
    resolveClipboardPromise = resolve
  })
  sandbox.stub(clipboard, "writeText").returns(clipboardPromise)
  const dom = mount(<OutputView value={lorem.words()} />)
  dom.find("#btn-copy").first().simulate("click")
  await act(async () => {
    resolveClipboardPromise()
  })
  dom.update()
  const tooltip = dom.find(Tooltip)
  expect([tooltip.prop("visible"), tooltip.prop("title")]).toEqual([
    true,
    "Copied!",
  ])
})

test("Copy failure message", async () => {
  let rejectClipboardPromise: () => void
  const clipboardPromise = new Promise<void>((_, reject) => {
    rejectClipboardPromise = reject
  })
  sandbox.stub(clipboard, "writeText").returns(clipboardPromise)
  const dom = mount(<OutputView value={lorem.words()} />)
  dom.find("#btn-copy").first().simulate("click")
  await act(async () => {
    rejectClipboardPromise()
  })
  dom.update()
  const tooltip = dom.find(Tooltip)
  expect([tooltip.prop("visible"), tooltip.prop("title")]).toEqual([
    true,
    "Can't copy!",
  ])
})
