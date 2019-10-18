import React, { Component } from 'react';
import Favorites from './Favorites';
import SportFilter from './SportFilter';

const SideBar = props => {

  const { favorites, handleClickFavorite, sportFilter, handleSportFilter } = props

  return (
    < div className='side-bar' >
      < SportFilter sportFilter={ sportFilter } handleSportFilter={ handleSportFilter }/>
      < Favorites favorites={ favorites }
                  handleClickFavorite={ handleClickFavorite }/>
    </ div >
  )

}

export default SideBar;
