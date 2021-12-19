import React from 'react'
import { Button, Menu } from 'antd'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import navs from '../../../assets/nav.json'
import './ModelNav.scss'
import ChildNav from './ChildNav'
function ModelNav({ show, handleShow }) {
  return (
    <Menu
      className={classNames({ 'model-nav': true, 'model-nav--show': show })}
    >
      <div className="model-nav__header">
        <h1>Tất cả chuyên mục</h1>
        <Button className="model-nav__close" onClick={handleShow}>
          Close
        </Button>
      </div>
      <Menu className="category">
        {navs.map(({ id, title, link, child }) => (
          <Menu.Item key={id} className="category-nav">
            <Link to={link} />
            <p className="category-nav__head">{title}</p>
            <ChildNav child={child} />
          </Menu.Item>
        ))}
      </Menu>
    </Menu>
  )
}

export default ModelNav
