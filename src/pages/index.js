import * as React from "react"
import Header from "../components/header/header"
import "./global.css"
import Footer from "../components/footer/footer"
import Navbar from "../components/navbar/navbar"
import { useRef, useEffect, useState } from 'react'


const IndexPage = () => {
  return (
    <main>
      <Navbar />
      <Header />
      <Footer />
      <Footer />
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Jan Wermeckes | Software-Entwickler</title>