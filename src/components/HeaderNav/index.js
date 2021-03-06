import React, { useState } from 'react'
import { Layout, Button, Input } from 'antd'
import {
  ClockCircleOutlined,
  UserOutlined,
  MenuOutlined,
} from '@ant-design/icons'
import moment from 'moment'
import 'moment/locale/vi'
import Navigation from './Navigation'
import './HeaderNav.scss'
import ModelNav from './ModelNav'

const { Search } = Input

const { Header } = Layout

function HeaderNav() {
  const date = moment().locale('vi').format('LLLL').split(' ')
  date.pop()
  const [showModelNav, setShowModelNav] = useState(false)
  const handleShowModelNav = () => setShowModelNav(!showModelNav)
  return (
    <>
      <Header className="header">
        <div className="header__left">
          <Button className="header__menu" onClick={handleShowModelNav}>
            <MenuOutlined />
          </Button>
          <img src="/logo.svg" className="logo" alt="logo" />
          <p className="header-time">{date.join(' ')}</p>
        </div>
        <div className="header__right">
          <Button className="header__new">
            <ClockCircleOutlined />
            Mới nhất
          </Button>
          <Button className="header__internation">International</Button>
          <Search
            className="header__search"
            placeholder="Tìm kiếm"
            style={{ width: 160 }}
          />
          <Button className="header__sigin" type="text">
            <UserOutlined />
            Đăng Nhập
          </Button>
        </div>
      </Header>
      <Navigation />
      <ModelNav show={showModelNav} handleShow={handleShowModelNav} />
    </>
  )
}

export default HeaderNav
