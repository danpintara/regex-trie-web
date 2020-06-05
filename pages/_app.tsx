import "antd/dist/antd.css"
import App from "next/app"
import Link from "next/link"
import { useRouter } from "next/router"
import React from "react"
import GitHubForkRibbon from "react-github-fork-ribbon"
import NavPill from "../components/NavPill"

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
  const router = useRouter()
  const pathKeyMapping = [
    {
      path: "/",
      tag: "home",
    },
    {
      path: "/about",
      tag: "about",
    },
  ]

  const activeKey = pathKeyMapping.find((mapping) =>
    router.pathname.endsWith(mapping.path)
  )?.tag

  return (
    <NavPill activeKey={activeKey}>
      <Link key="home" href="/">
        <a className={activeKey == "home" ? "selected" : ""}>Home</a>
      </Link>
      <span style={{ display: "inline-block", width: 16 }} />
      <Link key="about" href="/about">
        <a className={activeKey == "about" ? "selected" : ""}>About</a>
      </Link>
      <style jsx>
        {`
          a {
            color: #7f7f7f;
          }
          a:hover {
            color: #000000;
          }
          .selected {
            color: #000000;
          }
        `}
      </style>
    </NavPill>
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
