import React from 'react'
import { Link } from 'react-router-dom'

import { Container, Title, Cart, CartCount, CartIcon } from './styles'

const Header = () => (
  <Container>
    <Link to="/">
      <Title>Doughnuts</Title>
    </Link>

    <Link to="/cart">
      <Cart>
        <CartIcon className="fas fa-shopping-cart" />

        <CartCount>0</CartCount>
      </Cart>
    </Link>
  </Container>
)

export default Header
