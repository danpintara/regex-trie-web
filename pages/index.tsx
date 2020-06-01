import { Space, Switch } from "antd"
import React, { useState } from "react"
import TextInput from "../components/TextInput"
import { generate } from "../lib/generator"

function HomePage() {
  const [value, setValue] = useState("")
  const [useNonCapturingGroup, setUseNonCapturingGroup] = useState(true)

  return (
    <React.Fragment>
      <Space
        direction="vertical"
        size="large"
        style={{
          alignItems: "center",
          display: "flex",
        }}
      >
        <div>Input:</div>
        <TextInput value={value} onChange={setValue} />
        <div style={{ display: "flex", justifyItems: "center" }}>
          Use non-capturing group&nbsp;&nbsp;
          <Switch
            checked={useNonCapturingGroup}
            onChange={(val) => setUseNonCapturingGroup(val)}
          />
        </div>
        <div>Output:</div>
        <div>
          {generate(value.split("\n"), useNonCapturingGroup) ?? (
            <i>(no result)</i>
          )}
        </div>
      </Space>
    </React.Fragment>
  )
}

export default HomePage
