import { Input } from "antd"
import React, { Fragment } from "react"
import css from "styled-jsx/css"

interface Props {
  value?: string
  sampleValue?: string
  onChange?(newValue: string): void
}

const textAreaStyle = css.resolve`
  .input {
    min-height: 150px;
  }
`

const TextInput: React.FunctionComponent<Props> = function (props) {
  return (
    <Fragment>
      <Input.TextArea
        className={`${textAreaStyle.className} input`}
        onChange={(e) => props.onChange(e.target.value)}
        value={props.value}
        placeholder={props.sampleValue}
      />
      {textAreaStyle.styles}
    </Fragment>
  )
}

export default TextInput
