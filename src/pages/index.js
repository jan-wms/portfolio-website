import * as React from "react"
import Header from "../components/header/header"
import "./global.css"
import Footer from "../components/footer/footer"
import Projects from "../components/projects/projects"
import About from "../components/about/about"
import GithubSection from "../components/github/githubSection"
import NavBar from "../components/navBar/navBar"
import Seo from "../components/seo/seo"


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
