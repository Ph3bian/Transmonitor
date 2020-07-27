import React from 'react'
import { Logo, Bell, Search } from 'assets/svg'
import Avatar from 'assets/images/avatar.png'
import styles from './layout.module.scss'
const Header = () => {
  return (
    <>
      <div className={styles.headerLogo}>
        <Logo />
      </div>
      <div className={styles.headerContent}>
        <div className={styles.search}>
          <Search />
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
              <div className={styles.profile}>
                <div className={styles.profileName}>
                  <p>Hello</p>
                  <p>Oluwaleke Ojo</p>
                </div>
                <div  className={styles.profileImage}>
                  <img src={Avatar} alt="avatar" />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Header
