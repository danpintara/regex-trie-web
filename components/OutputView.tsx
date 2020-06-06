import React from "react"

interface Props {
  value?: string
  sampleValue?: string
}

const OutputView: React.FunctionComponent<Props> = function (props) {
  return (
    <div>
      {props.value ?? (
        <span style={{ color: "#5e5e5e" }}>{props.sampleValue}</span>
      )}
    </div>
  )
}

export default OutputView
