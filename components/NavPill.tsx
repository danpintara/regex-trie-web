import React, { Children, FC, RefObject, useRef, useState } from "react"
import Measure, { Rect } from "react-measure"

interface Props {
  activeKey?: string
}

const NavPill: FC<Props> = function (props) {
  const [rootClient, setRootClient] = useState<Rect | undefined>(undefined)
  const [offset, setOffset] = useState<Rect | undefined>(undefined)
  // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/35572
  const spanRef = useRef<HTMLSpanElement>() as RefObject<HTMLSpanElement>

  const previousOffsetLeft = spanRef.current?.offsetLeft
  const previousOffsetTop = spanRef.current?.offsetTop

  return (
    <Measure client onResize={(r) => setRootClient(r.client)}>
      {({ measureRef }) => (
        <div ref={measureRef} className="container">
          {offset && rootClient ? (
            <span
              ref={spanRef}
              className={`nav-pill ${
                previousOffsetLeft && previousOffsetLeft > offset.left
                  ? "f"
                  : "l"
              }-${
                previousOffsetTop && previousOffsetTop > offset.top ? "f" : "l"
              }`}
              style={{
                top: offset.top - 7,
                left: offset.left - 7,
                bottom: rootClient.height - (offset.top + offset.height) - 7,
                right: rootClient.width - (offset.left + offset.width) - 7,
              }}
            />
          ) : null}
          {Children.map(props.children, (c) => {
            if (typeof c === "object" && c != null && "key" in c) {
              if (c.key == props.activeKey) {
                return (
                  <Measure offset onResize={(r) => setOffset(r.offset)}>
                    {({ measureRef }) => {
                      return <span ref={measureRef}>{c}</span>
                    }}
                  </Measure>
                )
              } else {
                return <span>{c}</span>
              }
            }
            return c
          })}
          <style jsx>
            {`
              .f-f {
                transition: left 400ms, right 400ms 0.1s, top 400ms,
                  bottom 400ms 0.1s;
              }
              .f-l {
                transition: left 400ms, right 400ms 0.1s, top 400ms 0.1s,
                  bottom 400ms;
              }
              .l-f {
                transition: left 400ms 0.1s, right 400ms, top 400ms,
                  bottom 400ms 0.1s;
              }
              .l-l {
                transition: left 400ms 0.1s, right 400ms, top 400ms 0.1s,
                  bottom 400ms;
              }
              .container {
                position: relative;
              }
              .nav-pill {
                background-color: #e0e0e0;
                border-radius: 500px;
                position: absolute;
                z-index: -1;
              }
            `}
          </style>
        </div>
      )}
    </Measure>
  )
}

export default NavPill
