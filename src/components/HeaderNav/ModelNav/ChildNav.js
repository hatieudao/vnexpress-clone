import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'antd'
function ChildNav({ child }) {
  const firstLenght = Math.min(4, child.length)
  const [showMore, setShowMore] = useState(firstLenght)
  const handleShowMore = () => setShowMore(showMore === 4 ? child.length : 4)
  return (
    <>
      {child.slice(0, showMore).map((nav) => (
        <p key={nav.id} className="category-nav__child">
          <Link to={nav.link} />
          {nav.title}
        </p>
      ))}

      {child.length > 4 ? (
        <Button className="category-expand" onClick={handleShowMore}>
          {showMore < child.length ? 'Xem thêm' : 'Ẩn bớt'}
        </Button>
      ) : null}
    </>
  )
}

export default ChildNav
