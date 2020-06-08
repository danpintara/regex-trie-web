import "antd/dist/antd.css"
import { PageTransition } from "next-page-transitions"
import App from "next/app"
import Link from "next/link"
import { useRouter } from "next/router"
import React from "react"
import GitHubForkRibbon from "react-github-fork-ribbon"
import css from "styled-jsx/css"
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
      <span className="divider" />
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
          .divider {
            display: inline-block;
            width: 24px;
          }
        `}
      </style>
    </NavPill>
  )
}

const pageStyle = css.resolve`
  .anim-enter {
    opacity: 0;
  }
  .anim-enter-active {
    opacity: 1;
    transition: opacity 300ms;
  }
  .anim-exit {
    opacity: 1;
  }
  .anim-exit-active {
    opacity: 0;
    transition: opacity 300ms;
  }
`

class MainApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <React.Fragment>
        <ForkRibbon />
        <div className="container">
          <h1 className="full-width title">Regular Expression from Trie</h1>
          <div className="full-width nav">
            <TabNavigation />
          </div>
          <PageTransition
            timeout={300}
            classNames={`${pageStyle.className} anim`}
          >
            <Component {...pageProps} />
          </PageTransition>
        </div>
        <style jsx>
          {`
            .container {
              padding: 32px;
              margin: auto;
              max-width: 720px;
            }
            .nav {
              margin-bottom: 32px;
              display: flex;
              flex-direction: column;
              align-items: center;
            }
            .title {
              text-align: center;
              padding-left: 72px;
              padding-right: 72px;
              margin-bottom: 24px;
            }
            .full-width {
              width: 100%;
            }
          `}
        </style>
        {pageStyle.styles}
      </React.Fragment>
    )
  }
}

export default MainApp
