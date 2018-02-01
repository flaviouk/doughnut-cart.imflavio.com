import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { Container, Title, Cart, CartCount, CartIcon } from './styles'

const Header = ({ cartCount }) => (
  <Container>
    <Link to="/">
      <Title>Doughnuts</Title>
    </Link>

    <Link to="/cart">
      <Cart>
        <CartIcon className="fas fa-shopping-cart" />

        <CartCount>{cartCount}</CartCount>
      </Cart>
    </Link>
  </Container>
)

const mapStateToProps = ({ cart }) => ({
  cartCount: cart.length
})

export default connect(mapStateToProps)(Header)
