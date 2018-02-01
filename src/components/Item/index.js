import React from 'react'
import { connect } from 'react-redux'

import { actions } from 'ducks/cart'

import { Container, Name, Description, Price, Image, Button } from './styles'

const Item = ({ name, description, imageUrl, price, id, addToCart }) => (
  <Container>
    <Name>{name}</Name>

    <Description>{description}</Description>

    <Price>${price}</Price>

    <Image src={`/${imageUrl}`} />

    <Button onClick={() => addToCart(id)}>Add to Cart</Button>
  </Container>
)

const mapDispatchToProps = dispatch => ({
  addToCart: id => dispatch(actions.add(id))
})

export default connect(false, mapDispatchToProps)(Item)
