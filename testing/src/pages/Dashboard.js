import React from "react";
import { useLocation } from "react-router-dom";

const Dashboard = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const userName = queryParams.get("name");

  return (
    <div>
      <h1>Welcome, {userName}!</h1>
      {/* Other dashboard content goes here */}
    </div>
  );
};

export default Dashboard;
