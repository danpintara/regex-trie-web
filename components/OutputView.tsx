import React from "react"

interface Props {
  value?: string
  sampleValue?: string
}

const OutputView: React.FunctionComponent<Props> = function (props) {
  return (
    <pre className={props.value ? null : "sample"}>
      {props.value ?? props.sampleValue}
      <style jsx>{`
        pre {
          padding: 8px;
          background-color: #f0f0f0;
          width: 300px;
          max-width: 400px;
          min-height: 200px;
          white-space: pre-wrap;
          overflow-wrap: break-word;
        }
        .sample {
          color: #b0b0b0;
        }
      `}</style>
    </pre>
  )
}

export default OutputView
