import React from 'react'
import { Layout } from 'antd'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HeaderNav from './components/HeaderNav'
import HomePage from './pages/HomePage'
import 'antd/dist/antd.css'
import './App.css'
const { Content, Footer } = Layout

function App() {
  return (
    <Router>
      <Layout className="layout">
        <HeaderNav />
        <Content style={{ padding: '0 50px' }}>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
          </Routes>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Router>
  )
}

export default App
