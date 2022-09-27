import * as React from "react"
import Header from "../components/header/header"
import "./global.css"
import Footer from "../components/footer/footer"
import Navbar from "../components/navbar/navbar"


const IndexPage = () => {

  return (
    <main>
      <Navbar />
      <Header />
      <Footer />
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Jan Wermeckes | Portfolio</title>