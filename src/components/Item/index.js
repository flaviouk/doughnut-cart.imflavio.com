import React from 'react'

import { Container, Name, Description, Price, Image, Button } from './styles'

const Item = ({ name, description, imageUrl, price, id }) => (
  <Container>
    <Name>{name}</Name>

    <Description>{description}</Description>

    <Price>${price}</Price>

    <Image src={`/${imageUrl}`} />

    <Button onClick={() => console.log(id)}>Buy</Button>
  </Container>
)

export default Item
