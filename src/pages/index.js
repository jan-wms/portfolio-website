import * as React from "react"
import "./global.css"
import NavBar from '../components/navBar/navBar'
import Header from '../components/header/header'
import About from '../components/about/about'
import Projects from '../components/projects/projects'
import GithubSection from '../components/github/githubSection'
import Footer from '../components/footer/footer'
import Seo from '../components/seo/seo'

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
