import React from 'react';
import './RecentBillsGrid.css';

const RecentBillsGrid = ({ bills }) => {
  return (
    <div className="recent-bills-grid">
      {bills.map((bill) => (
        <div className="bill-card" key={bill.id}>
          <h3 className="bill-title">{bill.title}</h3>
          <p className="bill-details">{bill.details}</p>
          <a className="bill-summary" href={`https://congress.gov/bill/118th-congress/house-bill/${bill.id}`}target="_blank" rel="noopener noreferrer">Link to Bill</a>
          <p className="lastest-action"><u>latest action:</u></p>
          <p>{bill.la}</p>
          <p className="bill-info">Bill ID: {bill.id}</p>
        </div>
      ))}
    </div>
  );
};

export default RecentBillsGrid;
