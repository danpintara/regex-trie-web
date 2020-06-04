import { shallow } from "enzyme"
import React from "react"
import NavPill from "./NavPill"

test("Render", () => {
  shallow(<NavPill />)
})

test("Render children", () => {
  const child = <p />
  const dom = shallow(<NavPill>{child}</NavPill>)
  expect(dom.contains(child)).toBeTruthy()
})
