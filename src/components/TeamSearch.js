import React, { Component } from 'react';

export default class TeamSearch extends Component {

  state = {
    team: '',
    suggestion: ''
  }

  handleInputChange = evt => {
    this.setState({
      team: evt.target.value
    })
  }

  render() {
    return (
      < form >
        < label htmlFor='team'>Search for Team: </ label >
        < input name='team'
                id='team'
                value={ this.state.team }
                onChange={ this.handleInputChange } />
        < input type='submit' value='Search' />
      </ form >
    )
  }

}
