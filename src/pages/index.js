import * as React from "react"
import Header from "../components/header/header"
import "./global.css"
import Footer from "../components/footer/footer"
import Navbar from "../components/navbar/navbar"
import Projects from "../components/projects/projects"


const IndexPage = () => {
  return (
    <main>
      <Navbar />
      <Header />
      <Projects />
      <Footer />
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Jan Wermeckes | Software-Entwickler</title>