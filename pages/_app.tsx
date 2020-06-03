import "antd/dist/antd.css"
import App from "next/app"
import Link from "next/link"
import React from "react"
import GitHubForkRibbon from "react-github-fork-ribbon"

function ForkRibbon() {
  return (
    <GitHubForkRibbon
      href="https://github.com/danpintara/regex-trie-web"
      target="_blank"
    >
      Fork me on GitHub
    </GitHubForkRibbon>
  )
}

function TabNavigation() {
  return (
    <div>
      <Link href="/">Home</Link>&nbsp;&nbsp;
      <Link href="/about">About</Link>
    </div>
  )
}

class MainApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <React.Fragment>
        <ForkRibbon />
        <div
          style={{
            padding: 32,
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <h1 style={{ width: "75%", textAlign: "center", marginBottom: 24 }}>
            Regular Expression from Trie
          </h1>
          <div style={{ marginBottom: 24 }}>
            <TabNavigation />
          </div>
          <Component {...pageProps} />
        </div>
      </React.Fragment>
    )
  }
}

export default MainApp
