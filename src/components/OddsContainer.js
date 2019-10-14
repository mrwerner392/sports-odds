import React, { Component } from 'react';
import OddsHeader from './OddsHeader'
import OddsCardDisplay from './OddsCardDisplay';

export default class OddsContainer extends Component {

  state = {
    odds: null,
    leagueFilter: ''
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
    console.log(leagueFilter, odds);
    this.setState({
      odds,
      leagueFilter
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
                     handleLeagueFilter={ this.handleLeagueFilter } />
        < OddsCardDisplay odds={ this.state.odds || this.props.odds } />
      </ div >
    )
  }

}
