import React from 'react'
import { Layout } from 'antd'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HeaderNav from './components/HeaderNav'
import HomePage from './pages/HomePage'
import 'antd/dist/antd.css'
import './App.scss'
const { Content, Footer } = Layout

function App() {
  return (
    <Router>
      <Layout className="layout">
        <HeaderNav />
        <Content className="content">
          <Routes>
            <Route exact path="/" element={<HomePage />} />
          </Routes>
        </Content>
        <Footer className="footer">Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Router>
  )
}

export default App
