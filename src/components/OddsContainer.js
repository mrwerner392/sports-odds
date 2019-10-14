import React, { Component } from 'react';
import OddsHeader from './OddsHeader'
import OddsCardDisplay from './OddsCardDisplay';

export default class OddsContainer extends Component {

  // renderOddsCards = () => {
  //   // console.log("trying to render a card");
  //   return this.props.odds.map(odds => {
  //     // console.log(odds);
  //     return < OddsCard key={Math.floor(Math.random() * 1000000000)} odds={odds} />
  //   })
  // }

  render() {
    // console.log(this.props);
    return (
      < div className='odds-container' >
        < OddsHeader odds={ this.props.odds }
                     sportFilter={ this.props.sportFilter }
                     handleAddFavorite={ this.props.handleAddFavorite }
                     handleLeagueFilter={ this.props.handleLeagueFilter } />
        < OddsCardDisplay odds={ this.props.odds } />
      </ div >
    )
  }

}
