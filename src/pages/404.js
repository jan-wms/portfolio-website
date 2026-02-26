import * as React from "react"
import { Link } from "gatsby"
import * as styles from './404.module.css'


const NotFoundPage = () => {
  return (
    <main>
      <div className={styles.wrapper}>
        <section className={styles.content}>
          <h1>404</h1>
          <h2>Oops. It's gone.</h2>

          <Link to="/" className={styles.link}>wermeckes.com</Link>
        </section>
      </div>
    </main>
  )
}

export default NotFoundPage

export const Head = () => <title>Page not found • Jan Wermeckes</title>
