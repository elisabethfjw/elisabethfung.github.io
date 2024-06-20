import React from 'react'
import { getImageURL } from '../../utils'
import styles from './Header.module.css'
import resume from '../../../assets/header/ElisabethFung_Resume.pdf'
import cv from '../../../assets/header/ElisabethFung_CV.pdf'

export const Header = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Elisabeth Fung</h1>
            <p className={styles.description}>Data Science | AI/ML | UI/UX</p>
            <div className={styles.contact}>
              <a href='mailto:elisabeth_fung@mymail.sutd.edu.sg' className={styles.button}>Email</a>
              <a href='https://www.linkedin.com/in/elisabeth-fung/' className={styles.button}>LinkedIn</a>
              <a href={resume} className={styles.button}>Resume</a>
              <a href={cv} className={styles.button}>CV</a>
            </div>
        </div>
        <img src={getImageURL('lighthouse.png')} alt='Header Image' className={styles.headerImg}/>
    </section>
  )
};

