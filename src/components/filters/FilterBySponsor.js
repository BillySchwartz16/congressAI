import React from 'react';
import './Filter.css';

function FilterBySponsor() {
  return (
    <div className="filter-component">
      <h3>Filter by Sponsor</h3>
      <input type="text" placeholder="Enter sponsor name..." />
    </div>
  );
}

export default FilterBySponsor;
