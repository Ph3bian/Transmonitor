import React, { useState } from 'react'
import styles from './home.module.scss'
import { StatsIcon, Search, DropDown } from 'assets/svg'
import Table from 'components/Table'
import { data, schema } from './functions'
import Chart from 'components/Chart'
import Select from 'components/Form/Select'

const Home = () => {
  const [active, setActive] = useState('all')
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
              <p>
                Showing <span>20 <DropDown /></span>
                out of 500 payments
              </p>
            </div>
            <div className={styles.actions}>
              <div className={styles.search}>
                <Search />
                <input type="search" value="Search payments" />
              </div>
              <div className={styles.dropDown}>
                <p>Show</p>
                <Select
                  options={[
                    {
                      text: 'All',
                      value: 'all',
                    },
                    {
                      text: 'Reconciled',
                      value: 'Reconciled',
                    },
                    {
                      text: 'Unreconciled',
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
                  active={active}
                  setActive={setActive}
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
