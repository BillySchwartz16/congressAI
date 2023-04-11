import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import './SideBar.css';
import FilterBySponsor from './filters/FilterBySponsor';
import FilterByStatus from './filters/FilterByStatus';
import FilterByType from './filters/FilterByTopic';

const SideBar = ({ setChamber }) => {
  const [collapsed, setCollapsed] = useState(true);
  const [membersCollapsed, setMembersCollapsed] = useState(true);

  const handleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const handleMembersCollapse = () => {
    setMembersCollapsed(!membersCollapsed);
  };

  return (
    <div className={`sidebar${collapsed ? '-collapsed' : ''}`}>
      <div className="sidebar-header">
        <h3>CounsilAI</h3>
        <button onClick={handleCollapse}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
      <div className="filter-dropdown">
        <button onClick={handleCollapse} className="filter-btn">Filters</button>
        <div className={`filter-content ${collapsed ? '' : 'show'}`}>
          <FilterBySponsor />
          <FilterByStatus />
          <FilterByType />
        </div>
      </div>
      <div className="members-dropdown">
        <button onClick={handleMembersCollapse} className="members-btn">
          Members <FontAwesomeIcon icon={faCaretDown} />
        </button>
        <div className={`members-content ${membersCollapsed ? '' : 'show'}`}>
          <button className="sub-btn" onClick={() => setChamber("senate")}>Senate</button>
          <button className="sub-btn" onClick={() => setChamber("house")}>House</button>
        </div>
      </div>
      <div className="bills-dropdown">
        <button className="bills-btn">Bills</button>
      </div>
    </div>
  );
};

export default SideBar;
