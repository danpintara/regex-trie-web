import React from "react"

interface Props {
  value?: string
}

const OutputView: React.FunctionComponent<Props> = function (props) {
  return <div>{props.value ?? <i>(no input)</i>}</div>
}

export default OutputView
