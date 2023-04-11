import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './RecentBills.css';
import RecentBillsGrid from './RecentBillsGrid';

const Body = () => {
  const [bills, setBills] = useState([]);

  useEffect(() => {
    const fetchBills = async () => {
      const apiKey = "";
      const response = await axios.get(`https://api.congress.gov/v3/bill/118/hr?api_key=${apiKey}`);
      const billsData = response.data.bills.map(bill => ({
        id: bill.number,
        title: `Bill ${bill.number}`,
        details: bill.title,
        la: bill.latestAction.text,
        summary: bill.url,

      }));
      setBills(billsData);
    }
    fetchBills();
  }, []);

  return (
    <div className="body">
      <div className="container">
        <RecentBillsGrid bills={bills} />
        {/* Add other components here */}
      </div>
    </div>
  );
};

export default Body;
