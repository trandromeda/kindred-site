import React, { Component } from 'react';

const mockDataHOC = (WrappedComponent, mockData) => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: []
      }
    }

    componentDidMount() {
      this.setState({data: mockData});
    }

    render() {
      return <WrappedComponent data={this.state.data} {...this.props} />
    }
  }
}

export default mockDataHOC;