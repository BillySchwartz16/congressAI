// Members.js

import { useState, useEffect } from "react";
import axios from "axios";
import "./Members.css";

function Members({ chamber }) {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    async function loadMembers() {
      const apiKey = "YOUR_API_KEY_HERE";
      const response = await axios.get(
        `https://api.propublica.org/congress/v1/118/${chamber}/members.json`,
        {
          headers: {
            "X-API-Key": "",
          },
        }
      );
      const data = response.data.results[0].members
        .map((member) => ({
          name: `${member.first_name} ${member.last_name}`,
          party: member.party,
          state: member.state,
          image_url: `https://theunitedstates.io/images/congress/original/${member.id}.jpg`,
          district: member.district,
        }))
        .sort((a, b) => {
          if (a.state < b.state) {
            return -1;
          }
          if (a.state > b.state) {
            return 1;
          }
          return 0;
        });
      setMembers(data);
    }
    loadMembers();
  }, [chamber]);

  const flagBaseUrl = "https://flagcdn.com/w320/";

  const handleError = (event, stateFullName) => {
    event.target.src = `${flagBaseUrl}us.png`;
  };

  return (
    <div className="members-container">
      {members.map((member, index) => (
        <div key={member.name} className="member-card">
          <h2>{member.name}</h2>
          <p>Party: {member.party}</p>
          <p>State: {member.state}</p>
          <p>District: {member.district}</p>
          <img
            src={member.image_url}
            alt={member.name}
            onError={(event) => handleError(event, member.state)}
          />
        </div>
      ))}
    </div>
  );
}

export default Members;


