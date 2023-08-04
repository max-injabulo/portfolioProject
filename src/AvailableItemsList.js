import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

function AvailableItemsList(props) {
  return (
    <div class="container">
      <div className='row'>
        <div className='col-6'>
          <h4>{props.item.description}</h4>
          <p>{props.item.location}</p>
        </div>
        <div className='col-6'>
          <button onClick={props.onDelete}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default AvailableItemsList;
