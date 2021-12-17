import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'antd'
import { HomeFilled } from '@ant-design/icons'
import DropdownNav from '../DropdownNav'
const navs = [
  {
    id: 1,
    title: 'Thời sự',
    link: '#',
    child: [
      {
        id: 11,
        title: 'Thời sự',
        link: '#',
      },
      {
        id: 12,
        title: 'Thời sự',
        link: '#',
      },
      {
        id: 13,
        title: 'Thời sự',
        link: '#',
      },
    ],
  },
  {
    id: 2,
    title: 'Thời sự',
    link: '#',
    child: [
      {
        id: 21,
        title: 'Thời sự',
        link: '#',
      },
      {
        id: 22,
        title: 'Thời sự',
        link: '#',
      },
      {
        id: 23,
        title: 'Thời sự',
        link: '#',
      },
    ],
  },
  {
    id: 3,
    title: 'Thời sự',
    link: '#',
    child: [
      {
        id: 31,
        title: 'Thời sự',
        link: '#',
      },
      {
        id: 32,
        title: 'Thời sự',
        link: '#',
      },
      {
        id: 33,
        title: 'Thời sự',
        link: '#',
      },
    ],
  },
]
function Navigation() {
  return (
    <div className="navigation">
      <Menu theme="light" mode="horizontal">
        <Menu.Item key={0}>
          <HomeFilled />
          <Link to="/" />
        </Menu.Item>
        {navs.map(({ id, title, link, child }) => (
          <Menu.Item key={id}>
            <Link to={link} />
            <DropdownNav child={child} title={title} />
          </Menu.Item>
        ))}
      </Menu>
    </div>
  )
}

export default Navigation
