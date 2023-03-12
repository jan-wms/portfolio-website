import * as React from "react"
import "./global.css"
import NavBar from '../components/navBar/NavBar'
import Header from '../components/header/Header'
import About from '../components/about/About'
import Projects from '../components/projects/Projects'
import GithubSection from '../components/github/GithubSection'
import Footer from '../components/footer/Footer'
import Seo from '../components/seo/Seo'

const navBarLinks = [
  { url: "/#about", title: "Über mich", isButtonStyle: false },
  { url: "/#projects", title: "Projekte", isButtonStyle: false },
  { url: "/#github", title: "Github", isButtonStyle: false },
  { url: "/#footer", title: "Kontakt", isButtonStyle: true },
];

const IndexPage = () => {
  return (
    <main>
      <NavBar navBarLinks={navBarLinks} />
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
