import React from "react"
import { Text, TextWrapper } from "../components/shared/TextWrapper"
import { SkillWrapper, Items, SkillItem } from "../components/shared/Skill"
// import { useStaticQuery, graphql } from "gatsby"

const About = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     site {
  //       siteMetadata {
  //         stacks
  //       }
  //     }
  //   }
  // `)
  return (
    <>
      <TextWrapper>
        <Text>
          Hello, My name is Abhishek Kumar, and I'm a Front End Developer at
          <a
            style={{
              color: "#d6f10b",
              paddingLeft: "4px",
              fontWeight: 900,
            }}
            href={"https://twitter.com/Paytm"}
            target={"_blank"}
          >
            Paytm
          </a>
          . Currently working with React. After completing MSc Computer Science
          from University of Delhi, i started working at Libsys Ltd as Front End
          Developer. That was the beginning of the web exploration and love for
          Javascript. Strong engineering professional skilled in HTML, CSS,
          Javascript, JQuery, React Js and Angular 2+
        </Text>
      </TextWrapper>
      <SkillWrapper>
        <h4>Skills</h4>
        <Items>
          {/* {data.site.siteMetadata.stacks.map(stack => (
            <SkillItem key={stack}>{stack}</SkillItem>
          ))} */}
          <SkillItem key={"React"}>React</SkillItem>
          <SkillItem key={"Javascript"}>Javascript</SkillItem>
          <SkillItem key={"Angular"}>Angular 2+</SkillItem>
          <SkillItem key={"AngularMaterial"}>Angular Material</SkillItem>
          <SkillItem key={"HTML5"}>HTML5</SkillItem>
          <SkillItem key={"CSS3"}>CSS3</SkillItem>
          <SkillItem key={"SCSS"}>SCSS</SkillItem>
          <SkillItem key={"JQuery"}>JQuery</SkillItem>
          <SkillItem key={"JSP"}>JSP Servlets</SkillItem>
          <SkillItem key={"Git"}>Git</SkillItem>
        </Items>
      </SkillWrapper>
    </>
  )
}
export default About
