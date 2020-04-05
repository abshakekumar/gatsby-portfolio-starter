import React from "react"
import Layout from "../components/layout"
import "../components/layout.css"
import { Image } from "../components/shared/Image"

const NotFoundPage = () => (
  <Layout>
    <div
      className="not-found-container"
      style={{
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
        flexDirection: `row`,
        lineHeight: `.10rem`,
        fontWeight: "400",
      }}
    >
      <Image
        width="400px"
        height="400px"
        src={require("../images/page-not-found.svg")}
      />
      <div>
        <p
          style={{
            color: "#d6f10b",
            margin: 0,
            lineHeight: 1,
            fontSize: "10rem",
          }}
        >
          404
        </p>
        <p
          style={{
            lineHeight: 1,
          }}
        >
          You just hit a route that doesn&#39;t exist....
        </p>
        <div className="wrap">
          <button
            className="button"
            onClick={() =>
              (window.location.href = "https://abshakekumar.netlify.com/")
            }
          >
            Back Home
          </button>
        </div>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
