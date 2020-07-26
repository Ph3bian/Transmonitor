import React from 'react'
import NavItems from './navItems'
import Button from 'components/Form/Button'
const SideNav = () => (
  <div>
    <div>
      <Button type="button"> Generate Invoice</Button>
    </div>
    <div className="navs">
      {NavItems.map(({ heading, children, headerIcon }, id) => (
        <div key={id}>
          <div>
            {headerIcon ? headerIcon : ''} {heading}
          </div>
          <ul>
            {children &&
              children.map(({ icon, link, title }, id) => (
                <li key={`${id}${link}`}>
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
