import { CopyOutlined } from "@ant-design/icons"
import { Button } from "antd"
import React from "react"

interface Props {
  value?: string
  sampleValue?: string
}

const OutputView: React.FunctionComponent<Props> = function (props) {
  return (
    <div className="container">
      <pre className={props.value ? null : "pre-sample"}>
        {props.value ?? props.sampleValue}
      </pre>
      <span className="span-copy">
        <span>
          <Button id="copy">
            <CopyOutlined />
          </Button>
        </span>
      </span>
      <style jsx>{`
        .container {
          display: flex;
        }
        .span-copy {
          width: 0;
        }
        .span-copy > span {
          margin-left: 8px;
        }
        pre {
          padding: 8px;
          background-color: #f0f0f0;
          width: 300px;
          max-width: 400px;
          min-height: 200px;
          white-space: pre-wrap;
          overflow-wrap: break-word;
        }
        .pre-sample {
          color: #b0b0b0;
        }
      `}</style>
    </div>
  )
}

export default OutputView
