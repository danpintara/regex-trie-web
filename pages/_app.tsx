import "antd/dist/antd.css"
import { PageTransition } from "next-page-transitions"
import App from "next/app"
import Link from "next/link"
import { useRouter } from "next/router"
import React from "react"
import GitHubForkRibbon from "react-github-fork-ribbon"
import NavPill from "../components/NavPill"

function ForkRibbon() {
  const repositoryUrl = process.env.REPOSITORY_URL
  return (
    <GitHubForkRibbon href={repositoryUrl} target="_blank">
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
      <span style={{ display: "inline-block", width: 24 }} />
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
            margin: "auto",
            maxWidth: 720,
          }}
        >
          <h1
            style={{
              width: "100%",
              textAlign: "center",
              paddingLeft: 72,
              paddingRight: 72,
              marginBottom: 24,
            }}
          >
            Regular Expression from Trie
          </h1>
          <div
            style={{
              width: "100%",
              marginBottom: 32,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <TabNavigation />
          </div>
          <PageTransition timeout={300} classNames="page-transition">
            <Component {...pageProps} />
          </PageTransition>
          <style jsx global>{`
            .page-transition-enter {
              opacity: 0;
            }
            .page-transition-enter-active {
              opacity: 1;
              transition: opacity 300ms;
            }
            .page-transition-exit {
              opacity: 1;
            }
            .page-transition-exit-active {
              opacity: 0;
              transition: opacity 300ms;
            }
          `}</style>
        </div>
      </React.Fragment>
    )
  }
}

export default MainApp
