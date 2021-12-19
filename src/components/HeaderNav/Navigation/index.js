import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'antd'
import { HomeFilled } from '@ant-design/icons'
import classNames from 'classnames'
import DropdownNav from '../DropdownNav'
import navs from '../../../assets/nav.json'
import './Navigation.scss'
function Navigation() {
  const [fixedNav, setFixedNav] = useState(false)
  useEffect(() => {
    window.onscroll = () => {
      setFixedNav(window.pageYOffset >= 100)
    }
  }, [])
  return (
    <div
      className={classNames({
        navigation: true,
        'navigation--fixed': fixedNav,
      })}
    >
      <Menu className="navigation__menu" theme="light" mode="horizontal">
        <Menu.Item>
          <HomeFilled />
          <Link to="/" />
        </Menu.Item>
        {navs.map(({ id, title, link, child }) => (
          <Menu.Item key={id}>
            <DropdownNav child={child} title={title} link={link} />
          </Menu.Item>
        ))}
      </Menu>
    </div>
  )
}

export default Navigation
