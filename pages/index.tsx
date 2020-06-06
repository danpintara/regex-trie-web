import { Space, Switch } from "antd"
import React, { useState } from "react"
import OutputView from "../components/OutputView"
import TextInput from "../components/TextInput"
import { generate } from "../lib/generator"

const sampleInput = `
abcd
abde
`.trim()

export default function index() {
  const [value, setValue] = useState("")
  const [useNonCapturingGroup, setUseNonCapturingGroup] = useState(true)

  return (
    <Space
      direction="vertical"
      size="large"
      style={{
        alignItems: "center",
        display: "flex",
      }}
    >
      <div>Texts: (separated in lines)</div>
      <TextInput value={value} sampleValue={sampleInput} onChange={setValue} />
      <div style={{ display: "flex", justifyItems: "center" }}>
        Use non-capturing group&nbsp;&nbsp;
        <Switch
          checked={useNonCapturingGroup}
          onChange={(val) => setUseNonCapturingGroup(val)}
        />
      </div>
      <div>Regular expression:</div>
      <OutputView value={generate(value.split("\n"), useNonCapturingGroup)} />
    </Space>
  )
}
