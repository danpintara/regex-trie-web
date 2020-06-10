import { Input, Switch } from "antd"
import React, { RefObject, useEffect, useRef, useState } from "react"
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
  const textInputRef = useRef() as RefObject<
    InstanceType<typeof Input.TextArea>
  >

  useEffect(() => {
    textInputRef.current?.focus()
  }, [])

  return (
    <div className="container">
      <div>
        Texts: <i>(separated in lines)</i>
      </div>
      <div className="expand">
        <TextInput
          ref={textInputRef}
          value={value}
          sampleValue={sampleInput}
          onChange={setValue}
        />
      </div>
      <div className="container-non-capturing-switch">
        Use non-capturing group&nbsp;&nbsp;
        <Switch
          checked={useNonCapturingGroup}
          onChange={(val) => setUseNonCapturingGroup(val)}
        />
      </div>
      <div className="adjust-top">Regular expression:</div>
      <div className="expand">
        <OutputView
          value={generate(value.split("\n"), useNonCapturingGroup)}
          sampleValue={generate(sampleInput.split("\n"), useNonCapturingGroup)}
        />
      </div>
      <style jsx>
        {`
          .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-left: 28px;
            padding-right: 44px;
            margin-left: auto;
            margin-right: auto;
            max-width: 480px;
          }
          .container > * {
            margin-bottom: 24px;
          }
          .adjust-top {
            margin-top: 16px;
          }
          .expand {
            align-self: stretch;
          }
          .container-non-capturing-switch {
            display: flex;
          }
        `}
      </style>
    </div>
  )
}
