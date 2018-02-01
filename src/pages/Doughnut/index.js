import React from 'react'
import { connect } from 'react-redux'

import { Item } from 'components'

import { Container } from './styles'

const Doughnut = ({ doughnuts, match: { params: { id } } }) => {
  const doughnut = doughnuts.filter(x => x.id === id)[0]

  let Component = doughnut ? (
    <Item
      name={doughnut.name}
      description={doughnut.description}
      price={doughnut.price}
      imageUrl={doughnut.url}
    />
  ) : (
    <h1>Doughnut not found</h1>
  )

  return <Container>{Component}</Container>
}

const mapStateToProps = ({ doughnuts }) => ({ doughnuts: doughnuts.data })

export default connect(mapStateToProps)(Doughnut)
