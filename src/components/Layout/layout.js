import React from 'react'
import Header from './header'
import SideNav from './sideNav'
import styles from './layout.module.scss'
const Layout = ({ children }) => {
  return (
    <div className={styles.Layout}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.container}>
      <div className={styles.sidebar}>
        <SideNav />
      </div>
      <div className={styles.main}>{children}</div>
      </div>
    </div>
  )
}

export default Layout
