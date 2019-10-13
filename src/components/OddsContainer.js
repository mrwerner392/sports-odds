import React, { Component } from 'react';
import OddsCard from './OddsCard';

export default class OddsContainer extends Component {

  renderOddsCards = () => {
    // console.log("trying to render a card");
    return this.props.odds.map(odds => {
      // console.log(odds);
      return < OddsCard key={Math.floor(Math.random() * 100000)} odds={odds} />
    })
  }

  render() {
    // console.log(this.props);
    return (
      < div className='odds-container' >
        { this.renderOddsCards() }
      </ div >
    )
  }

}
