import React from 'react'
import styles from './Experience.module.css'

export const Experience = () => {
  return (
    <section className={styles.container} id='experience'>
        <h2 className={styles.title}>Experience</h2>
        <div className={styles.content}>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <div className={styles.listItemText}>
                <h3>Business Analyst Intern</h3>
                <h4>Accenture</h4>
                <ul>
                  <li className={styles.item}>Created a technical design file to convey the requirements</li>
                  <li className={styles.item}>Implemented code changes in the SPRING framework (SpringBatch and SpringBoot)</li>
                  <li className={styles.item}>Tested in controlled environments (SIT and UAT)</li>
                  <li className={styles.item}>Identified and fixed bugs by analyzing logs via AWS CloudWatch and querying the database using PostgreSQL</li>  
                </ul>
              </div>
            </li>

          </ul>
        </div>
        

    </section>
  )
}
