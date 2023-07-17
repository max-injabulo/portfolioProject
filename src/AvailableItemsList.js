import { ITEMS } from "./ITEMS";

function AvailableItemsList(props) {
    return (
          <div>
            <h4>{props.item.description}</h4>
            <p>{props.item.location}</p>
          </div>  
        )
      }
      // create request item button

export default AvailableItemsList;