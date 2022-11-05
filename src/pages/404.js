import * as React from "react"
import { Link } from "gatsby"
import './404.css'


const NotFoundPage = () => {
  return (
    <main>
      <h1>404</h1>
      <h2>Seite nicht gefunden</h2>
      
      <Link to="/">Zur Startseite</Link>
    </main>
  )
}

export default NotFoundPage

export const Head = () => <title>404 | Seite nicht gefunden</title>
