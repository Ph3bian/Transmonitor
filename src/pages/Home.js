import React from 'react'
import styles from './home.module.scss'
import { StatsIcon } from 'assets/svg'
import Table from 'components/Table'
import { data, schema } from './functions'
import Chart from 'components/Chart'
import Select from 'components/Form/Select'

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
        <div className={styles.graph}>
          <div></div>
          <div>
            <Chart />
          </div>
        </div>
        <div className={styles.summary}>
          <div>
            <h3>Orders</h3>
            <div className={styles.progressBar} role="progressbar">
              <div></div>
              <div></div>
            </div>
            <div>
              <p>
                Pending Orders: <span>20 </span>
              </p>
              <p>
                Reconciled Orders: <span>80 </span>
              </p>
              <p>
                Total Orders: <span>100 </span>
              </p>
            </div>
          </div>

          <div>
            <h3>Payments</h3>
            <div className={styles.progressBar} role="progressbar">
              <div></div>
              <div></div>
            </div>
            <div>
              <p>
                Pending Orders: <span>20 </span>
              </p>
              <p>
                Reconciled Orders: <span>80 </span>
              </p>
              <p>
                Total Orders: <span>100 </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.payments}>
        <div className={styles.paymentsHeader}>
          <h2>Payments</h2>
          <div className={styles.paymentsHeaderAction}>
            <div>
              <p>Showing 20 out of 500 payments </p>
            </div>
            <div className={styles.actions}>
              <div>
                <input type="search" />
              </div>
              <div className={styles.dropDown}>
                <Select
                  options={[
                    {
                      text: 'All',
                      value: 'All',
                    },
                    {
                      text: 'Reconciled',
                      value: 'Reconciled',
                    },
                    {
                      text: 'UnReconciled',
                      value: 'UnReconciled',
                    },
                    {
                      text: 'Settled',
                      value: 'Settled',
                    },
                    {
                      text: 'Unsettled',
                      value: 'Unsettled',
                    },
                  ]}
                ></Select>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.paymentsTable}>
          <Table data={data} schema={schema} />
        </div>
      </div>
    </div>
  )
}

export default Home
