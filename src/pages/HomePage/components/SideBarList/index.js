import React, { useState, useEffect } from 'react'
import { Card } from 'antd'
import './SideBarList.scss'
function SideBarList() {
  const [listNews, setListNews] = useState([])
  useEffect(() => {
    const callAPIGetHeadlines = async () => {
      const allHeadlines = []
      await fetch('/health.json')
        .then((res) => res.json())
        .then((data) => {
          allHeadlines.push(...data)
        })
      setListNews(allHeadlines)
    }
    callAPIGetHeadlines()
  }, [])
  return (
    <div className="sidebar-list">
      {listNews.length &&
        listNews
          .slice(0, 12)
          .map(({ title, description, image, url }, index) => (
            <Card
              key={`headline${index + 1}`}
              className="sidebar-list__item"
              type="inner"
              title={title}
              extra={<a href={url}>More</a>}
            >
              <img src={image || 'https://picsum.photos/200/300'} alt={title} />
              <p className="description">{description}</p>
            </Card>
          ))}
    </div>
  )
}

export default SideBarList
