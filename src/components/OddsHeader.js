import React, { Component } from 'react';
import LeagueFilter from './LeagueFilter';
import TeamSearch from './TeamSearch';


export default class OddsContainer extends Component {

  render() {
    // console.log(this.props);
    return (
      < div className='odds-header' >
        { this.props.sportFilter.length ?
          < h2 className='odds-sport-label' >{ this.props.sportFilter + '  ' }< span >< button className='add-favorite' onClick={ this.props.handleAddFavorite }>Add to Favorites</ button ></ span ></ h2 > :
          < h2 className='odds-sport-label' >All Sports</ h2 > }
        < LeagueFilter />
        < TeamSearch />
      </ div >
    )
  }

}
