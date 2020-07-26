import React from 'react'
import NavItems from './navItems'
const SideNav = () => (
  <div>
    <div>action</div>
    <div className="navs">
      {NavItems.map(({ heading, children, headingIcon }, id) => (
        <div key={id}>
          <div>{heading} </div>
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
