import React from 'react';
import './Filter.css'

function FilterByStatus() {
  return (
    <div className="filter-component">
      <h3>Filter by Status</h3>
      <ul>
        <li><label><input type="checkbox" name="status" value="introduced" /> Introduced</label></li>
        <li><label><input type="checkbox" name="status" value="passed" /> Passed</label></li>
        <li><label><input type="checkbox" name="status" value="vetoed" /> Vetoed</label></li>
        {/* Add more status options here */}
      </ul>
    </div>
  );
}

export default FilterByStatus;
