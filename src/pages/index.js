import * as React from "react"
import "./global.css"
import NavBar from '../components/navBar/navBar'
import Header from '../components/header/header'
import About from '../components/about/about'
import Projects from '../components/projects/projects'
import Footer from '../components/footer/footer'
import Seo from '../components/seo/seo'

const IndexPage = () => {
  return (
    <main>
      <NavBar />
      <Header />
      <About />
      <Projects />
      <Footer />
    </main>
  )
}

export default IndexPage

export const Head = () => (
  <Seo />
)
