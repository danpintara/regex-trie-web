import { CopyOutlined } from "@ant-design/icons"
import { Button, Tooltip } from "antd"
import { writeText } from "clipboard-polyfill"
import React, { FC, useEffect, useState } from "react"
import { CSSTransition } from "react-transition-group"
import css from "styled-jsx/css"

interface Props {
  value?: string
  sampleValue?: string
}

const copyButtonStyle = css.resolve`
  .copy-btn {
    margin-left: 8px;
  }
`

const CopyButton: FC<{ valueToCopy: string }> = function (props) {
  const [status, setStatus] = useState<boolean>(false)
  const [visible, setVisible] = useState<{} | false>(false)

  useEffect(() => {
    if (visible) {
      const handle = setTimeout(() => {
        setVisible(false)
      }, 1000)
      return () => clearTimeout(handle)
    }
  })

  return (
    <Tooltip
      title={status ? "Copied!" : "Can't copy!"}
      visible={!!visible}
      trigger={[]}
    >
      <Button
        id="btn-copy"
        className={`${copyButtonStyle.className} copy-btn`}
        onClick={async () => {
          try {
            await writeText(props.valueToCopy)
            setStatus(true)
          } catch (e) {
            console.log("Unable to copy: " + e)
            setStatus(false)
          } finally {
            setVisible({})
          }
        }}
      >
        <CopyOutlined />
        {copyButtonStyle.styles}
      </Button>
    </Tooltip>
  )
}

const animatedButtonStyle = css.resolve`
  .anim-enter {
    opacity: 0;
    transform: translate(-8px, 0);
  }
  .anim-enter-active {
    opacity: 1;
    transform: translate(0, 0);
    transition: all 300ms;
  }
  .anim-exit {
    opacity: 1;
    transform: translate(0, 0);
  }
  .anim-exit-active {
    opacity: 0;
    transform: translate(-8px, 0);
    transition: all 300ms;
  }
`

const OutputView: FC<Props> = function (props) {
  return (
    <div className="container">
      <pre className={props.value ? undefined : "pre-sample"}>
        {props.value ?? props.sampleValue}
      </pre>
      <span className="container-copy">
        <CSSTransition
          timeout={300}
          in={!!props.value}
          classNames={`${animatedButtonStyle.className} anim`}
          unmountOnExit
        >
          <CopyButton key="button" valueToCopy={props.value ?? ""} />
        </CSSTransition>
      </span>
      {animatedButtonStyle.styles}
      <style jsx>
        {`
          .container {
            display: flex;
          }
          .container-copy {
            width: 0;
          }
          pre {
            padding: 8px;
            flex-grow: 1;
            background-color: #f0f0f0;
            min-height: 200px;
            white-space: pre-wrap;
            word-break: break-all;
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
