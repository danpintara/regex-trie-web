import React, { Children, FC, useRef, useState } from "react"
import Measure, { Rect } from "react-measure"

interface Props {
  activeKey?: string
}

const NavPill: FC<Props> = function (props) {
  const [rootClient, setRootClient] = useState<Rect | undefined>(undefined)
  const [offset, setOffset] = useState<Rect | undefined>(undefined)
  const spanRef = useRef<HTMLSpanElement>()

  return (
    <Measure client onResize={(r) => setRootClient(r.client)}>
      {({ measureRef }) => (
        <div ref={measureRef} style={{ position: "relative" }}>
          <style jsx>
            {`
              .f-f {
                transition: left 0.4s, right 0.4s 0.1s, top 0.4s,
                  bottom 0.4s 0.1s;
              }
              .f-l {
                transition: left 0.4s, right 0.4s 0.1s, top 0.4s 0.1s,
                  bottom 0.4s;
              }
              .l-f {
                transition: left 0.4s 0.1s, right 0.4s, top 0.4s,
                  bottom 0.4s 0.1s;
              }
              .l-l {
                transition: left 0.4s 0.1s, right 0.4s, top 0.4s 0.1s,
                  bottom 0.4s;
              }
            `}
          </style>
          {offset && rootClient ? (
            <span
              ref={spanRef}
              className={`${
                spanRef.current?.offsetLeft > offset.left ? "f" : "l"
              }-${spanRef.current?.offsetTop > offset.top ? "f" : "l"}`}
              style={{
                position: "absolute",
                backgroundColor: "#e0e0e0",
                borderRadius: 100,
                zIndex: -1,
                top: offset.top - 7,
                left: offset.left - 7,
                bottom: rootClient.height - (offset.top + offset.height) - 7,
                right: rootClient.width - (offset.left + offset.width) - 7,
              }}
            />
          ) : null}
          {Children.map(props.children, (c) => {
            if (typeof c === "object" && "key" in c) {
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
        </div>
      )}
    </Measure>
  )
}

export default NavPill
