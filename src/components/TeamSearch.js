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

  handleFormSubmit = evt => {
    evt.preventDefault();
    this.props.handleTeamSearch(evt.target.team.value)
  }

  render() {
    return (
      < form onSubmit={ this.handleFormSubmit } >
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
