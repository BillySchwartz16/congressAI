import React from 'react';
import './Filter.css';

function FilterByTopic() {
  return (
    <div className="filter-component">
      <h3>Filter by Topic</h3>
      <ul>
        <li><label><input type="checkbox" name="topic" value="education" /> Education</label></li>
        <li><label><input type="checkbox" name="topic" value="healthcare" /> Healthcare</label></li>
        <li><label><input type="checkbox" name="topic" value="environment" /> Environment</label></li>
        {/* Add more topic options here */}
      </ul>
    </div>
  );
}

export default FilterByTopic;
