import React from "react"

const Categories = () => {
  const data = [
    {
      cateImg: "./images/category/cat1.png",
      cateName: "Swim Wear",
    },
    {
      cateImg: "./images/category/cat1.png",
      cateName: "Top",
    },
    {
      cateImg: "./images/category/cat1.png",
      cateName: "One Piece",
    },
    {
      cateImg: "./images/category/cat1.png",
      cateName: "Accecories",
    },
    {
      cateImg: "./images/category/cat1.png",
      cateName: "Ready to Wear",
    },
    
  ]

  return (
    <>
      <div className='category'>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Categories
