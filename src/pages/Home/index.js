import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { actions } from 'ducks/doughnuts'
import { Loading, Error, Item } from 'components'

class Home extends Component {
  componentDidMount() {
    this.props.attemptLoad()
  }

  render() {
    const { isLoading, error, data } = this.props

    return (
      <div>
        <Loading isLoading={isLoading} />

        <Error error={error} />

        {data.map(doughnut => (
          <Item
            name={doughnut.name}
            description={doughnut.description}
            imageUrl={doughnut.url}
            price={doughnut.price}
            key={doughnut.id}
          />
        ))}
      </div>
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
