import { Input, Space, Switch } from "antd"
import React, { useState } from "react"
import RegexTrie from "regex-trie"

const nonCapturingRegexp = new RegExp("(?:", "g")

function calculateRegex(value: string, useNonCapturingGroup: boolean) {
  const trie = new RegexTrie()
  value.split("\n").forEach((line) => trie.add(line))

  let result: string | undefined = trie.toString()
  if (!useNonCapturingGroup) {
    result = result?.replace(nonCapturingRegexp, "(")
  }
  return result
}

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
        {calculateRegex(value, useNonCapturingGroup) ?? <i>(no result)</i>}
      </div>
    </Space>
  )
}

export default HomePage
