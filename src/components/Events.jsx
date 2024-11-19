import React, { useState, useEffect } from 'react';
import Header from "./Home/Header";
import "./Event.css";

const eventsData = {
  "Goa": [
    { id: 1, title: "Beach Cleanup", date: "2024-11-25", description: "Help clean up a local beach in Goa!" },
    { id: 2, title: "Food Bank Volunteering", date: "2024-11-28", description: "Volunteer at a local food bank." },
  ],
  "Bangalore": [
    { id: 3, title: "Park Tree Planting", date: "2024-11-26", description: "Help plant trees in local parks." },
    { id: 4, title: "Homeless Shelter Support", date: "2024-11-27", description: "Assist at a homeless shelter in Bangalore." },
  ],
  "Udupi": [
    { id: 5, title: "Akshaya Patra", date: "2024-11-30", description: "Volunteer at a community kitchen in Udupi." },
    { id: 6, title: "Senior Center Help", date: "2024-12-01", description: "Assist at a local senior center." },
  ],
  "Belgavi": [
    { id: 7, title: "Community Kitchen", date: "2024-11-30", description: "Volunteer at a community kitchen in Belgavi." },
    { id: 8, title: "Senior Center Help", date: "2024-12-01", description: "Assist at a local senior center." },
  ],
};

function EventPage() {
  const [location, setLocation] = useState('');
  const [events, setEvents] = useState([]);
  const [submittedLocation, setSubmittedLocation] = useState(false);
  const [error, setError] = useState('');

  const handleLocationSubmit = () => {
    if (eventsData[location]) {
      setEvents(eventsData[location]);
      setSubmittedLocation(true);
      setError('');
    } else {
      setError("Sorry, no events available for this location.");
    }
  };

  return (
    <div>
      <Header />
      <div id="event-page">
        <h1 id="h">Volunteer Events</h1>

        {!submittedLocation ? (
          <div id="location-input">
            <h2 id="hh">Choose Your Location</h2>
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            >
              <option value="">Select Location</option>
              <option value="Goa">Goa</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Udupi">Udupi</option>
              <option value="Belgavi">Belgavi</option>
            </select>
            <button onClick={handleLocationSubmit}>Find Events</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
          </div>
        ) : (
          <div id="events-list">
            <h2>Upcoming Volunteer Events in {location}</h2>
            {events.length > 0 ? (
              <ul>
                {events.map((event) => (
                  <li key={event.id}>
                    <h3 >{event.title}</h3>
                    <p><strong>Date:</strong> {event.date}</p>
                    <p>{event.description}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No events available at the moment.</p>
            )}
            <button onClick={() => setSubmittedLocation(false)}>Change Location</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default EventPage;
