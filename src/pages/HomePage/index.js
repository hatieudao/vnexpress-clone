import React, { useState, useEffect } from 'react'
import SideBarList from './components/SideBarList'
import CategoryHeadline from './components/CategoryHeadline'
import './HomePage.scss'
function HomePage() {
  const [news, setNews] = useState(null)
  useEffect(() => {
    const callAPIGetHeadlines = async () => {
      const allHeadlines = []
      await fetch('/news.json')
        .then((res) => res.json())
        .then((data) => {
          allHeadlines.push(...data)
        })
      setNews(allHeadlines)
    }
    callAPIGetHeadlines()
  }, [])

  return (
    <div className="home-page container">
      <div className="home-page__hot-news">
        {news && (
          <>
            <a href={news[0].url}>
              <div className="home-page__hot-news__first">
                <img src={news[0].image} alt={news[0].title} />
                <div className="headline">
                  <p className="title">{news[0].title}</p>
                  <p className="description">{news[0].description}</p>
                </div>
              </div>
            </a>
            <div className="home-page__hot-news__child">
              {news.slice(1, 4).map(({ title, description, url }, index) => (
                <a key={`child${index + 1}`} href={url}>
                  <div className="headline">
                    <p className="title">{title}</p>
                    <p className="description">{description}</p>
                  </div>
                </a>
              ))}
            </div>
          </>
        )}
        <img
          className="home-page__hot-news__ads"
          src="https://picsum.photos/250/500"
          alt="ads"
        />
      </div>
      <div className="home-page__body">
        <SideBarList />
        <CategoryHeadline />
      </div>
    </div>
  )
}

export default HomePage
