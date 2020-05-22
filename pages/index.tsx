import { Input, Space } from "antd"
import React, { useState } from "react"
import RegexTrie from "regex-trie"

function calculateRegex(value: string) {
  const trie = new RegexTrie()
  value.split("\n").forEach((line) => trie.add(line))
  return trie.toString() ?? ""
}

function HomePage() {
  const [value, setValue] = useState("")

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
      <div>Output:</div>
      <div>{calculateRegex(value)}</div>
    </Space>
  )
}

export default HomePage
