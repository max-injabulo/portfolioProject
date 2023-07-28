import React from 'react';

function AvailableItemsList(props) {
  return (
    <div>
      <h4>{props.item.description}</h4>
      <p>{props.item.location}</p>
      <button onClick={props.onDelete}>Delete</button>
    </div>
  );
}

export default AvailableItemsList;
