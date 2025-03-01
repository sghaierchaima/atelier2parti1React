import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';


const Event = ({ event, onBook, onLike }) => {
  return (
    <Col md={4} className="mb-4">
      <Card>
        <Card.Img variant="top" src="im.png" />
        <Card.Body>
          <Card.Title>{event.title}</Card.Title>
          <Card.Text>{event.description}</Card.Text>
          <Card.Text>Participants: {event.participants}</Card.Text>
          <Card.Text>Tickets left: {event.tickets}</Card.Text>
          <Button variant="primary" onClick={() => onBook(event.id)} disabled={event.tickets === 0}>
            {event.tickets === 0 ? 'Sold Out' : 'Book an Event'}
          </Button>
          <Button variant="secondary" className="ms-2" onClick={() => onLike(event.id)}>
            {event.liked ? 'Dislike' : 'Like'}
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Event;
