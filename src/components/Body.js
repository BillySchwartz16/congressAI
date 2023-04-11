import React from 'react';
import SearchBills from './bills/SearchBills';
import RecentBills from './bills/RecentBills';
import './Body.css';
import Members from './representatives/Members';

const Body = ({ chamber }) => {
  return (
    <div className="body">
      <div className="container">
        <SearchBills />
        <Members chamber={chamber} />
        {/* Add other components here */}
      </div>
    </div>
  );
};

export default Body;

