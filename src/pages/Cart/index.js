import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { actions, savedItemsSelector } from 'ducks/cart'

import CartItem from './CartItem'
import { Container } from './styles'

const Cart = ({ cart }) => (
  <Container>
    {!cart.length && <h1>Cart is Empty</h1>}

    {cart.map(({ name, price, url, id, counter }) => (
      <CartItem name={name} counter={counter} price={price} imageUrl={url} id={id} key={id} />
    ))}
  </Container>
)

const mapStateToProps = ({ cart }) => ({ cart: savedItemsSelector(cart) })

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart)
