import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';

function History(){
    return (
        <ListGroup variant="flush">
            <ListGroup.Item>Date and Time</ListGroup.Item>
            <ListGroup.Item>{} + " - " + {} + </ListGroup.Item>
        </ListGroup>
    )
}

export default History;