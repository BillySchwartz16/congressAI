import React from 'react';
import './SearchBar.css';

function SearchBar() {
  return (
    <form className="search-form">
      <input
        className="search-input"
        type="text"
        placeholder="Search bills..."
      />
      <button className="search-button" type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchBar;
