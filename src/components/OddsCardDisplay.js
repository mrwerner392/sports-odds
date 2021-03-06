import React, { Component } from 'react';
import OddsCard from './OddsCard';

export default class OddsCardDisplay extends Component {

  renderOddsCards = () => {
    // console.log("trying to render a card");
    return this.props.odds.map(odds => {
      // console.log(odds);
      return < OddsCard key={Math.floor(Math.random() * 1000000000)} odds={odds} />
    })
  }

  render() {
    // console.log(this.props.odds);
    return (
      < div className='odds-card-display'>
        { this.renderOddsCards() }
      </ div >
    )
  }

}
