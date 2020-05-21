import React from "react"
import App from "next/app"

import "antd/dist/antd.css"

class MainApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return <Component {...pageProps} />
  }
}

export default MainApp
