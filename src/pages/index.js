import * as React from "react"
import Header from "../components/header/Header"
import "./global.css"
import Footer from "../components/footer/Footer"
import Projects from "../components/projects/Projects"
import About from "../components/about/About"
import GithubSection from "../components/github/GithubSection"
import NavBar from "../components/navBar/NavBar"
import Seo from "../components/seo/Seo"


const IndexPage = () => {
  return (
    <main>
      <NavBar />
      <Header />
      <About />
      <Projects />
      <GithubSection />
      <Footer />
    </main>
  )
}

export default IndexPage

export const Head = () => (
  <Seo />
)
