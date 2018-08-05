import React, { Component } from 'react';
import { connect } from 'react-redux';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    }
  }

  render() {
    return(
      <div>Search</div>
    );
  }
}

const mapDispatchToProps = {
  searchProductTag,
}

export default connect(null, mapDispatchToProps)(Search)