import { Input, Space, Switch } from "antd"
import React, { useState } from "react"
import { generate } from "../lib/generator"

function HomePage() {
  const [value, setValue] = useState("")
  const [useNonCapturingGroup, setUseNonCapturingGroup] = useState(true)

  return (
    <Space
      direction="vertical"
      size="large"
      style={{
        alignItems: "center",
        display: "flex",
        padding: 32,
      }}
    >
      <h1>Regular Expression from Trie</h1>
      <div>Input:</div>
      <Input.TextArea rows={4} onChange={(e) => setValue(e.target.value)} />
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
  )
}

export default HomePage
