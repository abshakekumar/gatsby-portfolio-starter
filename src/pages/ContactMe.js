/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Image } from "../components/shared/Image"
import { TitleComponent } from "../components/shared/TextWrapper"
import "../components/layout.css"

const ContactMe = ({ children }) => {
  return (
    <>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `100%`,
          padding: "50px 12px",
        }}
      >
        <TitleComponent>Contact Me</TitleComponent>
        <div
          className={"contactMe"}
          style={{
            display: "flex",
            flexDirection: "row",
            paddingLeft: "5rem",
            paddingTop: "30px",
            justifyContent: "space-between",
          }}
        >
          <div className={"outer-container"}>
            <div
              style={{
                border: "1px solid #d6f10b",
              }}
            >
              <div>
                <div
                  style={{
                    padding: "1.25rem",
                    display: "flex",
                    alignItems: "center",
                    backgroundColor: "#d6f10b",
                  }}
                >
                  <Image
                    width="4rem"
                    height="4rem"
                    maxHeight="100%"
                    maxWidth="100%"
                    borderRadius="50%"
                    src={require("../images/profilePic.jpg")}
                  />
                  {/* <img 
                    src="../images/profilePic.jpg"
                    alt="Profile"
                  /> */}
                  <div
                    style={{
                      paddingLeft: ".75rem",
                    }}
                  >
                    <h2
                      style={{
                        fontSize: "1.5rem",
                        margin: 0,
                        fontWeight: "normal",
                      }}
                    >
                      Abhishek Kumar
                    </h2>
                    <h3
                      style={{
                        fontSize: "1.125rem",
                        margin: 0,
                        fontWeight: "normal",
                      }}
                    >
                      Front End Developer
                    </h3>
                  </div>
                </div>
                <h2
                  style={{
                    padding: "0.75rem 1.25rem",
                    fontSize: "inherit",
                    margin: 0,
                    display: "flex",
                    fontWeight: "inherit",
                    backgroundColor: "rgba(214, 241, 11, 0.7)",
                  }}
                >
                  <svg
                    style={{
                      height: "1.25rem",
                      paddingRight: "1rem",
                    }}
                    version="1.1"
                    id="Layer_1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 512 512"
                  >
                    <g>
                      <g>
                        <path
                          d="M256,0C153.755,0,70.573,83.182,70.573,185.426c0,126.888,165.939,313.167,173.004,321.035
			c6.636,7.391,18.222,7.378,24.846,0c7.065-7.868,173.004-194.147,173.004-321.035C441.425,83.182,358.244,0,256,0z M256,278.719
			c-51.442,0-93.292-41.851-93.292-93.293S204.559,92.134,256,92.134s93.291,41.851,93.291,93.293S307.441,278.719,256,278.719z"
                        />
                      </g>
                    </g>
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                    <g />
                  </svg>
                  New Delhi, India
                </h2>
                <ul
                  className={"contact-us"}
                  style={{
                    padding: "0 1.25rem",
                    margin: 0,
                  }}
                >
                  <li>
                    <svg viewBox="0 0 320 512">
                      <path d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z" />
                    </svg>
                    <div>
                      <p>Phone</p>
                      <a href="tel:+919034367484" title="phone">
                        +91-9034367484
                      </a>
                    </div>
                  </li>
                  <li>
                    <svg viewBox="0 0 512 512">
                      <path d="M176 216h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16zm-16 80c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16zm96 121.13c-16.42 0-32.84-5.06-46.86-15.19L0 250.86V464c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V250.86L302.86 401.94c-14.02 10.12-30.44 15.19-46.86 15.19zm237.61-254.18c-8.85-6.94-17.24-13.47-29.61-22.81V96c0-26.51-21.49-48-48-48h-77.55c-3.04-2.2-5.87-4.26-9.04-6.56C312.6 29.17 279.2-.35 256 0c-23.2-.35-56.59 29.17-73.41 41.44-3.17 2.3-6 4.36-9.04 6.56H96c-26.51 0-48 21.49-48 48v44.14c-12.37 9.33-20.76 15.87-29.61 22.81A47.995 47.995 0 0 0 0 200.72v10.65l96 69.35V96h320v184.72l96-69.35v-10.65c0-14.74-6.78-28.67-18.39-37.77z" />
                    </svg>
                    <div>
                      <p>Email</p>
                      <a
                        href="mailto:abhishek.mcs.du.2014@gmail.com"
                        title="email"
                      >
                        abhishek.mcs.du.2014@gmail.com
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Image
            className={"contact-us-image"}
            width="400px"
            height="400px"
            maxHeight="100%"
            maxWidth="100%"
            src={require("../images/contactme.svg")}
          />
        </div>
      </div>
    </>
  )
}

export default ContactMe
