import React, { useState, useEffect } from 'react';

const eventsData = {
  "New York": [
    { id: 1, title: "Beach Cleanup", date: "2024-11-25", description: "Help clean up a local beach in New York!" },
    { id: 2, title: "Food Bank Volunteering", date: "2024-11-28", description: "Volunteer at a local food bank." },
  ],
  "Los Angeles": [
    { id: 3, title: "Park Tree Planting", date: "2024-11-26", description: "Help plant trees in local parks." },
    { id: 4, title: "Homeless Shelter Support", date: "2024-11-27", description: "Assist at a homeless shelter in LA." },
  ],
  "Chicago": [
    { id: 5, title: "Community Kitchen", date: "2024-11-30", description: "Volunteer at a community kitchen in Chicago." },
    { id: 6, title: "Senior Center Help", date: "2024-12-01", description: "Assist at a local senior center." },
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
    <div className="event-page">
      <h1>Volunteer Events</h1>

      {!submittedLocation ? (
        <div className="location-input">
          <h2>Enter Your Location</h2>
          <input
            type="text"
            placeholder="Enter your city"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <button onClick={handleLocationSubmit}>Find Events</button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
      ) : (
        <div className="events-list">
          <h2>Upcoming Volunteer Events in {location}</h2>
          {events.length > 0 ? (
            <ul>
              {events.map((event) => (
                <li key={event.id}>
                  <h3>{event.title}</h3>
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
  );
}

export default EventPage;