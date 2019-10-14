import React, { Component } from 'react';

export default class OddsCard extends Component {

  renderOdds = (event, sitesData) => {
    // console.log(event, sitesData);
    const arrOfOdds = [];
    // console.log('trying to loop through odds');
    for (let site in sitesData) {
      // console.log("line 8", sitesData);
      if (site === 'last_updated') {continue};
      for (let listing in sitesData[site]) {
        // console.log("line 11", sitesData[site]);
        if (listing === 'outright') {continue};
        // console.log(sitesData[site][listing]);
        let oddsTypes = Object.keys(sitesData[site][listing].odds);
        const oddsForThisListing = oddsTypes.map(type => {
          switch (type) {
            case '1':
              return < p key={Math.floor(Math.random() * 1000000000)} className="odds">{ event.home + ' win: ' + sitesData[site][listing].odds[type] }</ p >;
            case '2':
              return < p key={Math.floor(Math.random() * 1000000000)} className="odds">{ event.away + ' win: ' + sitesData[site][listing].odds[type] }</ p >;
            case 'X':
              return < p key={Math.floor(Math.random() * 1000000000)} className="odds">{ 'Ends in a draw: ' + sitesData[site][listing].odds[type] }</ p >;
            default:
              break;
          }
        })
        arrOfOdds.push(...oddsForThisListing)

        // just show one set of odds per matchup
        break;
      }
      break;
    }
    return arrOfOdds
  }

  render() {
    const {event, league, sites} = this.props.odds;
    // console.log(event, league, sites, sport);
    return (
      < div className='odds-card'>
        < h2 className='league-header'>{ league.name }</ h2 >
        < h3 className='away-team'>{ event.away }</ h3 >
        < p className='versus'>vs.</ p >
        < h3 className='home-team'>{ event.home }</ h3 >
        { this.renderOdds(event, sites) }
      </ div >
    )
  }

}
