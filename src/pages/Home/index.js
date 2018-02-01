import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { actions } from 'ducks/doughnuts'
import { Loading, Error, Item } from 'components'

import { Container } from './styles'

class Home extends Component {
  componentDidMount() {
    this.props.attemptLoad()
  }

  render() {
    const { isLoading, error, data } = this.props

    return (
      <Container>
        <Loading isLoading={isLoading} />

        <Error error={error} />

        {data.map(({ id, name, description, url, price }) => (
          <Item id={id} name={name} imageUrl={url} price={price} key={id} />
        ))}
      </Container>
    )
  }
}

const mapStateToProps = ({ doughnuts: { isLoading, data, error } }) => ({
  isLoading,
  data,
  error
})

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)
