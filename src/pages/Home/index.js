import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { actions } from 'ducks/doughnuts'
import { Loading } from 'components'

class Home extends Component {
  componentDidMount() {
    this.props.attemptLoad()
  }

  render() {
    const { isLoading } = this.props

    return (
      <div>
        <Loading isLoading={isLoading} />

        <h1>Home</h1>
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
