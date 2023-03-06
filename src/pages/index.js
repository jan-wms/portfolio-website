import * as React from "react"
import Header from "../components/header/header"
import "./global.css"
import Footer from "../components/footer/footer"
import Projects from "../components/projects/projects"
import About from "../components/about/about"


const IndexPage = () => {
  return (
    <main>
      <Header />
      <About />
      <Projects />
      <Footer />
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Jan Wermeckes • Software-Entwickler</title>