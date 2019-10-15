import React, { Component } from 'react';

export default class TeamSearch extends Component {

  state = {
    teamInput: '',
    activeSuggestion: 0,
    filteredSuggestions: [],
    showSuggestions: false
  }

  // handleInputChange = evt => {
  //   this.setState({
  //     teamInput: evt.target.value
  //   })
  // }

  handleFormSubmit = evt => {
    evt.preventDefault();
    this.props.handleTeamSearch(evt.target.team.value)
  }


  handleInputChange = evt => {
    const { teams } = this.props;
    const teamInput = evt.currentTarget.value;
    // console.log(teams);
    // Filter our suggestions that don't contain the user's input
    let filteredSuggestions = [];
    let showSuggestions = false;
    if (teamInput.length) {
      filteredSuggestions = teams.filter(team => team.toLowerCase().includes(teamInput.toLowerCase()));
      showSuggestions = true;
    }

    this.setState({
      activeSuggestion: 0,
      filteredSuggestions,
      showSuggestions,
      teamInput
    });
  };

  onClick = evt => {
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      teamInput: evt.currentTarget.value
    })
  }

  onKeyDown = evt => {
    const { activeSuggestion, filteredSuggestions } = this.state;

    if (evt.keyCode === 13) {
      this.setState({
        activeSuggestion: 0,
        showSuggestions: false,
        userInput: filteredSuggestions[activeSuggestion],
        filteredSuggestions: []
      });
    } else if (evt.keyCode === 38) {
      if (activeSuggestion !== 0) {
        activeSuggestion--;
        this.setState({
          activeSuggestion
        });
      };
    } else if (evt.keyCode === 40) {
      if (activeSuggestion !== filteredSuggestions.length - 1) {
        activeSuggestion++;
        this.setState({
          activeSuggestion
        });
      };
    };
  };

  renderSuggestions = () => {
    return (
      < ul className="suggestions" >
        {this.state.filteredSuggestions.map((suggestion, index) => {
          let className;

          // Flag the active suggestion with a class
          if (index === this.state.activeSuggestion) {
            className = "suggestion-active";
          }

          return (
            < li className={className} key={suggestion} onClick={this.onClick} >
              {suggestion}
            </ li >
          );
        })}
      </ ul >
    )
  }

  render() {

    // console.log(this.props.teams);

    const {
      handleInputChange,
      onKeyDown,
      renderSuggestions,
      state: {
        showSuggestions,
        teamInput
      }
    } = this;

    return (
      < form className='team-search' onSubmit={ this.handleFormSubmit } >
        < label htmlFor='team'>Search for Team: </ label >
        < input name='team'
                id='team'
                type='text'
                value={ teamInput }
                onChange={ handleInputChange }
                onKeyDown={ onKeyDown } />
        { showSuggestions ? renderSuggestions() : null }
        < input type='submit' value='Search' />
      </ form >
    )
  }

}
