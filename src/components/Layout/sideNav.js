import React from 'react'
import NavItems from './navItems'
import Button from 'components/Form/Button'
import styles from './layout.module.scss'
const SideNav = () => (
  <div className={styles.SideNav}>
    <div className={styles.action}>
      <Button type="button" data-variant="primary">
        Generate Invoice
      </Button>
    </div>
    <div className={styles.nav}>
      {NavItems.map(({ heading, children, headerIcon }, id) => (
        <div key={id} className={styles.navContainer}>
          <div>
            {headerIcon ? headerIcon : ''} {heading}
          </div>
          <ul className={styles.navList}>
            {children &&
              children.map(({ icon, link, title, className }, id) => (
                <li key={`${id}${link}`} className={styles[className]}>
                  {icon}
                  {title}
                </li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
)

export default SideNav
