import React from 'react';
import { connect } from 'react-redux';
import {updateSearchItem} from '../redux/actions/categoryActions'
import searchIcon from '../assets/images/searchIcon.svg';

const SearchBar = props => {
  const searchItemEntered = (e) => {
    props.updateSearchItem(e.target.value);
  };
  return (
    <div className='search-bar-wrapper'>
      <img className='search-icon' src={searchIcon} alt='search-img'></img>
      <input className='search-text-area' placeholder='Search for keywords, author' onChange={(e)=>{searchItemEntered(e)}}></input>
    </div>
  )
}

export default connect(null, { updateSearchItem })(SearchBar);
