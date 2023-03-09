import * as React from "react"
import { Link } from "gatsby"
import * as styles from './404.module.css'


const NotFoundPage = () => {
  return (
    <main>
      <div className={styles.wrapper}>
        <section className={styles.content}>
          <h1>404</h1>
          <h2>Seite nicht gefunden</h2>

          <Link to="/" className={styles.link}>Zur Startseite</Link>
        </section>
      </div>
    </main>
  )
}

export default NotFoundPage

export const Head = () => <title>404 • Seite nicht gefunden • Jan Wermeckes</title>
