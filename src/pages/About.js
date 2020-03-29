import React from "react"
import { Text, TextWrapper } from "../components/shared/TextWrapper"
import { SkillWrapper, Items, SkillItem } from "../components/shared/Skill"
import { useStaticQuery, graphql } from "gatsby"

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          stacks
        }
      }
    }
  `)
  return (
    <>
      <TextWrapper>
        <Text>
          Hello, My name is Abhishek Kumar, and I'm a Front End Developer at
          <a
            style={{
              color: "#d6f10b",
              paddingLeft: "8px",
              fontWeight: 900,
            }}
            href={"https://twitter.com/Paytm"}
            target={"_blank"}
          >
            Paytm
          </a>
        </Text>
      </TextWrapper>
      <SkillWrapper>
        <h4>Current Dev Stack</h4>
        <Items>
          {data.site.siteMetadata.stacks.map(stack => (
            <SkillItem key={stack}>{stack}</SkillItem>
          ))}
        </Items>
      </SkillWrapper>
    </>
  )
}
export default About
