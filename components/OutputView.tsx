import { CopyOutlined } from "@ant-design/icons"
import { Button, Tooltip } from "antd"
import { writeText } from "clipboard-polyfill"
import React, { FC, useState } from "react"

interface Props {
  value?: string
  sampleValue?: string
}

const CopyButton: FC<{ valueToCopy: string }> = function (props) {
  const [status, setStatus] = useState<boolean>(false)

  return (
    <span className="span-copy">
      <span>
        <Tooltip
          title={status ? "Copied!" : "Can't copy!"}
          visible={true}
          trigger={[]}
        >
          <Button
            id="btn-copy"
            onClick={async () => {
              try {
                await writeText(props.valueToCopy)
                setStatus(true)
              } catch (e) {
                console.log("Unable to copy: " + e)
                setStatus(false)
              }
            }}
          >
            <CopyOutlined />
          </Button>
        </Tooltip>
      </span>
      <style jsx>
        {`
          .span-copy {
            width: 0;
          }
          .span-copy > span {
            margin-left: 8px;
          }
        `}
      </style>
    </span>
  )
}

const OutputView: FC<Props> = function (props) {
  return (
    <div className="container">
      <pre className={props.value ? null : "pre-sample"}>
        {props.value ?? props.sampleValue}
      </pre>
      {props.value ? <CopyButton valueToCopy={props.value} /> : null}
      <style jsx>
        {`
          .container {
            display: flex;
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
        `}
      </style>
    </div>
  )
}

export default OutputView
