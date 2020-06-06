import React from "react"

interface Props {
  value?: string
  sampleValue?: string
}

const OutputView: React.FunctionComponent<Props> = function (props) {
  return (
    <div>
      {props.value ?? (
        <span style={{ color: "#b0b0b0" }}>{props.sampleValue}</span>
      )}
    </div>
  )
}

export default OutputView
