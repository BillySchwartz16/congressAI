import React from 'react';
import { useLocation } from 'react-router-dom';
import SearchBills from './bills/SearchBills';
import RecentBills from './bills/RecentBills';
import './Body.css';
import Members from './representatives/Members';

const Body = ({ chamber }) => {
  const location = useLocation();

  return (
    <div className="body">
      <div className="container">
        <SearchBills />
        {location.pathname === '/bills' && <RecentBills />}
        {(location.pathname === '/' || location.pathname === '/house' || location.pathname === '/senate') && <Members chamber={chamber} />}
      </div>
    </div>
  );
};

export default Body;

