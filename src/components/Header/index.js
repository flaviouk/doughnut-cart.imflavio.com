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
        <i className="fas fa-shopping-cart" style={CartIcon} />

        <CartCount>0</CartCount>
      </Cart>
    </Link>
  </Container>
)

export default Header
