import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Faculty = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { department, faculty } = location.state || { department: "Unknown", faculty: [] };

  return (
    <div className="faculty-page" style={{ position: "relative", minHeight: "100vh", paddingBottom: "60px" }}>
      <h2 className="department-title">{department}</h2>
      <div className="faculty-container">
        {faculty.map((member, index) => (
          <div key={index} className="faculty-card">
            <div className="faculty-image">
              <img src={member.image} alt={member.name} />
              <div className="faculty-info">
                <h3>{member.name}</h3>
                <p>{member.qualification}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Sticky Back Button */}
      <button className="back-button" onClick={() => navigate(-1)}>
        ⬅ Back
      </button>
    </div>
  );
};

export default Faculty;
