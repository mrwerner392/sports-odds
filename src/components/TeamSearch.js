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
    // console.log(evt.currentTarget);
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      teamInput: evt.currentTarget.innerText
    })
  }

  onKeyDown = evt => {
    let { activeSuggestion, filteredSuggestions } = this.state;
    console.log(evt.target);
    // console.log(evt.currentTarget);

    if (evt.keyCode === 13) {
      this.setState({
        activeSuggestion: 0,
        showSuggestions: false,
        teamInput: filteredSuggestions[activeSuggestion],
        filteredSuggestions: []
      });
    } else if (evt.keyCode === 27) {
      this.setState({
        showSuggestions: false
      })
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

    const { state: {filteredSuggestions, activeSuggestion}, onClick } = this;

    return (
      < ul className='suggestions' id='suggestions'>
        { filteredSuggestions.map((suggestion, index) => {
          let className = ['suggestion'];

          // Flag the active, first, and last suggestion with a class
          if (index === activeSuggestion) {
            className.push('suggestion-active');
          };

          {/*
          if (index === 0) {
            className.push('suggestion-first');
          };
          if (index === filteredSuggestions.length - 1) {
            className.push('suggestion-last');
          };
          */}

          return (
            < li className={ className.join(' ') }
                 key={ suggestion }
                 onClick={ onClick }
                 >
              {suggestion}
            </ li >
          );
        }) }
      </ ul >
    )
  }

  // componentDidUpdate() {
  //   let suggestionList = document.querySelector('#suggestions')
  //   console.log(suggestionList);
  //   console.log(suggestionList.scrollHeight);
  // }

  render() {

    // console.log(this.props.teams);

    const { handleInputChange,
            onKeyDown,
            renderSuggestions,
            state: {
              showSuggestions,
              teamInput
            } } = this;

    return (
      < form className='team-search' onSubmit={ this.handleFormSubmit } >
        < label htmlFor='team'>Search for Team: </ label >
        < input name='team'
                id='team'
                type='text'
                autoComplete="off"
                value={ teamInput }
                onChange={ handleInputChange }
                onKeyDown={ onKeyDown } />
        { showSuggestions ? renderSuggestions() : null }
        { /*< input type='submit' value='Search' />*/ }
      </ form >
    )
  }

}
