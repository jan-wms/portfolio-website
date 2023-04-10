import * as React from "react"
import { Link } from "gatsby"
import * as styles from './success.module.css'


const SuccessPage = () => {
    return (
        <main>
            <div className={styles.wrapper}>
                <section className={styles.content}>
                    <h1>Danke</h1>
                    <h2>Deine Nachricht wurde erfolgreich übermittelt.</h2>

                    <Link to="/" className={styles.link}>Zur Startseite</Link>
                </section>
            </div>
        </main>
    )
}

export default SuccessPage

export const Head = () => <title>Nachricht erfolgreich übermittelt. | Jan Wermeckes</title>
