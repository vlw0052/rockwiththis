import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import SubscribeFrom from 'react-mailchimp-subscribe'
import { fetchFilters } from './actions/filters'

class SidebarFilters extends Component {


  constructor(props) {
      super(props)
  }

    componentDidMount() {
        console.log("this.props")
        console.log(this.props)
    }

    renderFilter(tag, index) {
        return (
            <span className="filterTag">{tag.name}</span>
        )
    }

    render() {
      const filterTags = this.props.filters.map(this.renderFilter)
      return (
          <div className="filters clearfix">
            {filterTags}
          </div>
      )
    }
}


const mapStateToProps = (state, ownProps) => ({
    filters: state.filters
})

const mapDispatchToProps = (dispatch, ownProps) => ({

})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SidebarFilters)
