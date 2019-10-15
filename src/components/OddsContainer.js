import React, { Component } from 'react';
import OddsHeader from './OddsHeader'
import OddsCardDisplay from './OddsCardDisplay';

export default class OddsContainer extends Component {

  state = {
    odds: null,
    leagueFilter: '',
    teamSearch: ''
  }
  // renderOddsCards = () => {
  //   // console.log("trying to render a card");
  //   return this.props.odds.map(odds => {
  //     // console.log(odds);
  //     return < OddsCard key={Math.floor(Math.random() * 1000000000)} odds={odds} />
  //   })
  // }

  handleLeagueFilter = evt => {
    // console.log(evt.target.value);
    const leagueFilter = evt.target.value;
    const odds = this.props.odds.filter(oddsObj => oddsObj.league.name === leagueFilter);
    // console.log(leagueFilter, odds);
    this.setState({
      odds,
      leagueFilter
    })
  }

  handleTeamSearch = teamSearch => {
    const searchString = teamSearch.toLowerCase();
    // console.log(this.props.odds);
    const odds = this.props.odds.filter(oddsObj => {
      const awayTeam = oddsObj.event.away;
      const homeTeam = oddsObj.event.home;
      // console.log(awayTeam, homeTeam);
      return awayTeam.toLowerCase().includes(searchString) ||
              homeTeam.toLowerCase().includes(searchString);
    })
    this.setState({
      odds,
      teamSearch
    })
  }

  render() {
    // console.log(this.props);
    return (
      < div className='odds-container' >
        < OddsHeader odds={ this.props.odds }
                     sportFilter={ this.props.sportFilter }
                     leagueFilter={ this.state.leagueFilter }
                     handleAddFavorite={ this.props.handleAddFavorite }
                     handleLeagueFilter={ this.handleLeagueFilter }
                     handleTeamSearch={ this.handleTeamSearch } />
        < OddsCardDisplay odds={ this.state.odds || this.props.odds } />
      </ div >
    )
  }

}
