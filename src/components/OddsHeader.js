import React, { Component } from 'react';

export default class OddsContainer extends Component {

  render() {
    console.log(this.props);
    return (
      < div className='odds-header' >
          < h6 className='odds-sport-label' >{ this.props.filter + '  ' }< span >< button className='add-favorite' onClick={ this.props.handleAddFavorite }>Add to Favorites</ button ></ span ></ h6 >
      </ div >
    )
  }

}
