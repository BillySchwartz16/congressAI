import React, { useState } from 'react';
import './SearchBills.css';

const SearchBills = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Search query: ${searchQuery}`);
    // Call API or dispatch Redux action to search for bills with searchQuery
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search by keyword or bill number"
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBills;
