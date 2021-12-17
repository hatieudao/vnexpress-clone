import React from 'react'
import { Menu, Dropdown } from 'antd'
import { Link } from 'react-router-dom'
import './DropdownNav.scss'
const menu = (child) => (
  <Menu>
    {child.map(({ id, title, link }) => (
      <Menu.Item key={id}>
        {title}
        <Link to={link} />
      </Menu.Item>
    ))}
  </Menu>
)
function DropdownNav({ child, title, link }) {
  return (
    <Dropdown overlay={menu(child)}>
      <Link to={link} className="nav__title">
        {title}
      </Link>
    </Dropdown>
  )
}

export default DropdownNav
