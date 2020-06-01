import React from "react"

interface Props {
  value: string
}

const OutputView: React.FunctionComponent<Props> = function (props) {
  return <div>{props.value}</div>
}

export default OutputView
