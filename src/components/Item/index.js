import React from 'react'

const Item = ({ name, description, imageUrl, price }) => (
  <div>
    <h1>{name}</h1>
    <p>{description}</p>
    <p>{price}</p>

    <img src={`/${imageUrl}`} />
  </div>
)

export default Item
