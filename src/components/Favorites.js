import React, { Component } from 'react';

const Favorites = props => {

  const { favorites, handleClickFavorite } = props;

  return (
    < div className='favorites'>
      < h4 >Favorites</ h4 >
      { favorites ?
        favorites.map(favorite => {
        return < li key={ Math.floor(Math.random() * 1000000000) }
                    id={ favorite }
                    className='favorite'
                    onClick={ handleClickFavorite }>
          { favorite }
        </ li >
        })
        : null
      }
    </ div >
  )

}

export default Favorites;
