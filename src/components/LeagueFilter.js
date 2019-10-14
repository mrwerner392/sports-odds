import React, { Component } from 'react';

export default class LeagueFilter extends Component {

  getFilterValues = () => {
    const leagues = this.props.odds.map(oddsObj => oddsObj.league.name)
    // console.log(leagues);
    const uniqueLeagues = leagues.filter((league, index) => leagues.indexOf(league) === index)
    console.log(uniqueLeagues);
    return uniqueLeagues.map(option => {
      return < option key={Math.floor(Math.random() * 1000000000)}
                      value={ option }
                      >
                      { option }
              </ option >
    })
  }

  render() {
    console.log(this.props);
    return (
      < select >
        { this.getFilterValues() }
      </ select >
    )
  }

}
// {'Filter ' + this.props.sportFilter + ' by League:'}
