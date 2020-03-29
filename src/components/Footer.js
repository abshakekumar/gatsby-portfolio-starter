import React from "react"
import { FootContainer, Content, MediaLink } from "./shared/Foot"

const Footer = () => {
  return (
    <FootContainer>
      <Content>
        <div>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </div>
        <div>
          <MediaLink
            href={"https://www.linkedin.com/in/abhishek-kumar-uidev/"}
            target="_blank"
          >
            Linkedin
          </MediaLink>
          <MediaLink href={"https://github.com/abshakekumar"} target="_blank">
            Github
          </MediaLink>
          <MediaLink href={"https://twitter.com/AbhiKum144"} target="_blank">
            Twitter
          </MediaLink>
          <MediaLink
            href={"https://stackoverflow.com/users/story/9434520"}
            target="_blank"
          >
            Stack Overflow
          </MediaLink>
        </div>
      </Content>
    </FootContainer>
  )
}
export default Footer
