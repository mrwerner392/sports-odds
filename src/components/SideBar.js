import React, { Component } from 'react';
import Favorites from './Favorites';
import Filter from './Filter';

export default class SideBar extends Component {

  render() {
    return (
      < div className='side-bar' >
        < Favorites />
        < Filter handleFilter={ this.props.handleFilter }/>
      </ div >
    )
  }

}
