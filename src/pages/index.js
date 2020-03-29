import React from "react"

import Layout from "../components/layout"
import Header from "../components/Header"
import Container from "../components/Containers/Container"
import About from "./About"
import Project from "./Project"
import ContactMe from "./ContactMe"

const IndexPage = () => (
  <Layout>
    <Header />
    <Container>
      <div id="about">
        <About />
      </div>
      <div id="project">
        <Project />
      </div>

      <div id="contactme">
        <ContactMe />
      </div>
    </Container>
  </Layout>
)

export default IndexPage
