import * as React from "react"
import Header from "../components/header/header"
import "./global.css"
import Footer from "../components/footer/footer"
import Projects from "../components/projects/projects"


const IndexPage = () => {
  return (
    <main>
      <Header />
      {/* <Projects />*/}
      <Footer />
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Jan Wermeckes | Software-Entwickler</title>