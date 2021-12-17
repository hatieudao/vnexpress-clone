import React from 'react'
import { Menu, Dropdown } from 'antd'
import { Link } from 'react-router-dom'
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
function DropdownNav({ child, title }) {
  return (
    <Dropdown overlay={menu(child)}>
      <p>{title}</p>
    </Dropdown>
  )
}

export default DropdownNav
