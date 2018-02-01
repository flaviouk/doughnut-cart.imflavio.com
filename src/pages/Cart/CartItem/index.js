import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { actions } from 'ducks/cart'

import { Container, Name, Price, Image, Button } from './styles'

const CartItem = props => (
  <Container>
    <Name>{props.name}</Name>

    <Price>
      ${props.counter > 1 ? props.counter * props.price : props.price}
      {props.counter > 1 && ` (${props.counter} * ${props.price})`}
    </Price>

    <Image src={`/${props.imageUrl}`} />

    {props.id && (
      <Link to={`/doughnut/${props.id}`}>
        <Button>View Details</Button>
      </Link>
    )}

    <Button onClick={() => props.addToCart(props.id)}>+1</Button>

    <Button onClick={() => props.removeFromCart(props.id)}>-1</Button>
  </Container>
)

const mapDispatchToProps = dispatch => ({
  addToCart: id => dispatch(actions.add(id)),
  removeFromCart: id => dispatch(actions.remove(id))
})

export default connect(false, mapDispatchToProps)(CartItem)
