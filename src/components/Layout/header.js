import React from 'react'
import { Logo, Bell } from 'assets/svg'
import styles from './layout.module.scss'
const Header = () => {
  return (
    <>
      <div className={styles.headerLogo}>
        <Logo />
      </div>
      <div className={styles.headerContent}>
        <div className={styles.search}>
          <input type="search" placeholder="Search..." />
        </div>
        <div className={styles.nav}>
          <ul>
            <li>Support</li>
            <li>FAQ</li>
            <li>
              <Bell />
            </li>
            <li>
              <div className="profile"></div>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Header
