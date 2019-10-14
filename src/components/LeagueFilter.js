import React, { Component } from 'react';

export default class LeagueFilter extends Component {

  getFilterValues = () => {
    const leagues = this.props.odds.map(oddsObj => oddsObj.league.name)
    // console.log(leagues);
    const uniqueLeagues = leagues.filter((league, index) => leagues.indexOf(league) === index)
    // console.log(uniqueLeagues);
    return uniqueLeagues.map(option => {
      return < option key={Math.floor(Math.random() * 1000000000)}
                      value={ option }
                      >
                      { option }
              </ option >
    })
  }

  render() {
    // console.log(this.props.sportFilter);
    return (
      < React.Fragment >
        < label >{'Filter ' + this.props.sportFilter + ' by League: '}</ label >
        < select value={ this.props.leagueFilter } onChange={ this.props.handleLeagueFilter } >
          { this.getFilterValues() }
        </ select >
      </ React.Fragment >
    )
  }

}
