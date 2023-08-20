import React from 'react'

const withCounter = (OrginalComponent) => {

  class NewCounter extends React.Component {
    state = {
        count: 0,
    }

    incrementCount =() => {
        this.setState({
            count: this.state.count + 1,
        })
        // this.setState((preState) => ({
        //     count: preState.count + 1,
        // }))
    };
    render() {
      const {count} = this.state;
      return <OrginalComponent  count= {count} incrementCount={this.incrementCount}/>
    }
  }
  return NewCounter;
  
}

export default withCounter