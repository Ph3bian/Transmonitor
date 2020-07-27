import React from 'react'
import styles from './home.module.scss'
import { StatsIcon } from 'assets/svg'
import Table from "components/Table"
import {data, schema} from "./functions"

const Home = () => {
  return (
    <div className={styles.Home}>
      <div className={styles.stats}>
        <div className={styles.statsItem}>
          <div>
            <p> Daily Transaction Volume</p>
            <p>2,342</p>
          </div>
          <div>
            <StatsIcon />
          </div>
        </div>
        <div className={styles.statsItem}>
          <div>
            <p> Daily Transaction Value</p>
            <p>₦4,000,000</p>
          </div>
          <div>
            <StatsIcon />
          </div>
        </div>
        <div className={styles.statsItem}>
          <div>
            <p> Total Transaction Volume </p>
            <p>452,000</p>
          </div>
          <div>
            <StatsIcon />
          </div>
        </div>
        <div className={styles.statsItem}>
          <div>
            <p> Total Transaction Value</p>
            <p>₦4,000,000</p>
          </div>
          <div>
            <StatsIcon />
          </div>
        </div>
      </div>
      <div className={styles.analytics}>
        <div className={styles.graph}></div>
        <div className={styles.summary}></div>
      </div>
      <div className={styles.payments}>
        <div className={styles.paymentsHeader}>
          <h2>Payments</h2>
          <div className={styles.paymentsHeaderAction}></div>
        </div>
        <div className={styles.paymentsTable}>
          <Table data={data}/>
          </div>
      </div>
    </div>
  )
}

export default Home
