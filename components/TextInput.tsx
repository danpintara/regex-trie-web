import { Input } from "antd"
import React, { forwardRef, Fragment } from "react"
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

const TextInput = forwardRef<InstanceType<typeof Input.TextArea>, Props>(
  (props, ref) => {
    return (
      <Fragment>
        <Input.TextArea
          ref={ref}
          className={`${textAreaStyle.className} input`}
          onChange={(e) => props.onChange && props.onChange(e.target.value)}
          value={props.value}
          placeholder={props.sampleValue}
        />
        {textAreaStyle.styles}
      </Fragment>
    )
  }
)
TextInput.displayName = "TextInput"

export default TextInput
