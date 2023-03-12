import * as React from "react"
import "./global.css"
import NavBar from '../components/navBar/NavBar.jsx'
import Header from '../components/header/Header.jsx'
import About from '../components/about/About.jsx'
import Projects from '../components/projects/Projects.jsx'
import GithubSection from '../components/github/GithubSection.jsx'
import Footer from '../components/footer/Footer.jsx'
import Seo from '../components/seo/Seo.jsx'

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
