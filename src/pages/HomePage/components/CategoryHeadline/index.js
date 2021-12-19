import React, { useState, useEffect } from 'react'
import { Card } from 'antd'
import './CategoryHeadline.scss'
const categories = [
  'business',
  'entertaiment',
  'health',
  'science',
  'sports',
  'technology',
]
function CategoryHeadline() {
  const [listNews, setListNews] = useState([])
  useEffect(() => {
    const newList = []
    const callAPIGetHeadlines = async (category) => {
      await fetch(`/${category}.json`)
        .then((res) => res.json())
        .then((data) => {
          newList.push({ category, list: data.slice(0, 5) })
        })
      setListNews(newList)
    }
    categories.forEach((category) => callAPIGetHeadlines(category))
  }, [])
  const tabList = (category) => {
    console.log(category)
    let list = [...categories]
    list = list.filter((item) => item !== category)
    list.unshift(category)
    return list.map((item) => ({ key: item, tab: item }))
  }
  console.log(listNews)
  return (
    <div className="category-headline">
      {listNews.length &&
        listNews.map(({ category, list }, index) => (
          <Card
            key={`headline${index + 1}`}
            className="category-headline__item"
            type="inner"
            tabList={tabList(category)}
          >
            <div className="category-headline__item__head">
              <div className="category-headline__item__head__first">
                <img
                  src={list[0].image || 'https://picsum.photos/200/300'}
                  alt={list[0].title}
                />
                <div className="infor">
                  <p className="title">{list[0].title}</p>
                  <p className="description">{list[0].description}</p>
                </div>
              </div>
              <div className="category-headline__item__head__second infor">
                <p className="title">{list[1].title}</p>
                <p className="description">{list[1].description}</p>
              </div>
            </div>
            <div className="category-headline__item__body">
              {list.slice(2, 5).map(({ title, url }) => (
                <a href={url}>
                  <div className="infor">
                    <p className="title">{title}</p>
                  </div>
                </a>
              ))}
            </div>
          </Card>
        ))}
    </div>
  )
}

export default CategoryHeadline
