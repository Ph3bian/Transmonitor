import React from 'react'
import styles from './home.module.scss'
const Home = () => {
  return (
    <div className={styles.Home}>
      <div className={styles.stats}>
        <div className={styles.statsItem}>
          <div></div>
          <div></div>
        </div>
        <div></div>
        <div></div> <div></div>
      </div>
      <div className={styles.analytics}></div>
      <div className={styles.payments}></div>
    </div>
  )
}

export default Home
