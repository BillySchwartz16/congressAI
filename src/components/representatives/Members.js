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
            "X-API-Key": "i6DR8OCj31eYgSimJ2rWe99vTDV95RWOWNI8c7FW",
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

  const [observer, setObserver] = useState(null);

  useEffect(() => {
    const options = {
      rootMargin: "0px 0px 100px 0px",
      threshold: 0.01,
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          observer.unobserve(lazyImage);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    setObserver(observer);

    return () => {
      if (observer) observer.disconnect();
    };
  }, []);

  return (
    <div className="members-container">
      {members.map((member, index) => (
        <div key={member.name} className="member-card">
          <h2>{member.name}</h2>
          <p>Party: {member.party}</p>
          <p>State: {member.state}</p>
          <p>District: {member.district}</p>
          <img
            data-src={member.image_url}
            alt={member.name}
            onError={(event) => handleError(event, member.state)}
            ref={(element) => {
              if (observer && element) observer.observe(element);
            }}
          />
        </div>
      ))}
    </div>
  );
}

export default Members;


