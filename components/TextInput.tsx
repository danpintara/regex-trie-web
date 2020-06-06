import { Input } from "antd"
import React from "react"

interface Props {
  value?: string
  sampleValue?: string
  onChange?(newValue: string): void
}

const TextInput: React.FunctionComponent<Props> = function (props) {
  return (
    <Input.TextArea
      rows={4}
      onChange={(e) => props.onChange(e.target.value)}
      value={props.value}
      placeholder={props.sampleValue}
    />
  )
}

export default TextInput
