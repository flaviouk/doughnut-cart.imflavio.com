import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { actions } from 'ducks/cart'

import { Container, Name, Description, Price, Image, Button } from './styles'

const Item = ({ name, description, imageUrl, price, id, addToCart }) => (
  <Container>
    <Name>{name}</Name>

    {description && <Description>{description}</Description>}

    <Price>${price}</Price>

    <Image src={`/${imageUrl}`} />

    <Link to={`/doughnut/${id}`}>
      <Button>View Details</Button>
    </Link>

    <Button onClick={() => addToCart(id)}>Add to Cart</Button>
  </Container>
)

const mapDispatchToProps = dispatch => ({
  addToCart: id => dispatch(actions.add(id))
})

export default connect(false, mapDispatchToProps)(Item)
