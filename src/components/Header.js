import React from "react"
import { Heading, SideText, Skill } from "./Heading/HeadStyle"
import { Image } from "./shared/Image"

const Header = () => {
  return (
    <Heading>
      <Image
        width="370px"
        height="400px"
        src={require("../images/code-developer.svg")}
      />
      <div
        style={{
          display: `flex`,
          justifyContent: `center`,
          alignItems: `center`,
          flexDirection: `column`,
          lineHeight: `1`,
          fontWeight: "400",
        }}
      >
        <SideText>
          Hi there, I'm{" "}
          <span
            style={{
              fontWeight: "700",
              color: "#D6F10B",
              display: "inline-block",
              textAlign: "center",
              cursor: "pointer",
            }}
            onClick={() =>
              (window.location.href = "https://fast-resume.netlify.app/")
            }
          >
            Abhishek Kumar
          </span>
        </SideText>
        <Skill>I'm a Front End Developer</Skill>
      </div>
    </Heading>
  )
}
export default Header
