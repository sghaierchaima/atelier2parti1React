import React, { useState, useEffect } from 'react';
import { Row, Alert } from 'react-bootstrap';
import Event from './Event.jsx';
import eventsData from './events.json';

const Events = () => {
  const [events, setEvents] = useState(eventsData);
  const [message, setMessage] = useState(null);
  const [welcomeMessage, setWelcomeMessage] = useState(true);

  useEffect(() => {
    setTimeout(() => setWelcomeMessage(false), 3000);
  }, []);

  const buy = (id) => {
    setEvents(events.map(event =>
      event.id === id && event.tickets > 0
        ? { ...event, participants: event.participants + 1, tickets: event.tickets - 1 }
        : event
    ));
    setMessage('You have booked an event');
    setTimeout(() => setMessage(null), 2000);
  };

  const toggleLike = (id) => {
    setEvents(events.map(event =>
      event.id === id ? { ...event, liked: !event.liked } : event
    ));
  };

  return (
    <div className="container mt-4">
      {welcomeMessage && <Alert variant="success">hey Welcome to Esprit  events!</Alert>}
      {message && <Alert variant="info">{message}</Alert>}
      <Row>
        {events.map(event => (
          <Event key={event.id} event={event} onBook={buy} onLike={toggleLike} />
        ))}
      </Row>
    </div>
  );
};

export default Events;
