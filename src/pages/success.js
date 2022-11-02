import * as React from "react"
import { Link } from "gatsby"
import * as styles from './success.module.css'
import { ImArrowLeft2 } from "@react-icons/all-files/im/ImArrowLeft2"



const SuccessPage = () => {
    return (
        <main>
            <div className={styles.successBackground}>
            <section className={styles.successInformation}>
                <h1>Danke</h1>
                <p>Deine Nachricht wurde erfolgreich übermittelt. Du erhältst schnellstmöglich eine Antwort!</p>

                <span><Link to="/" className={styles.link}><ImArrowLeft2 className={styles.icon}/>Zurück zur Startseite</Link></span>
            </section>
            </div>
        </main>
    )
}

export default SuccessPage

export const Head = () => <title>Nachricht erfolgreich gesendet | Jan Wermeckes</title>
