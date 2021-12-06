import './styles.css';

import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';

// Import the global state
import GroceryContext from '../../../context/groceryContext';

// Import history
import { useHistory } from 'react-router';

export const GroceryDetailPage = (props) => {

  // Get id from the URL
  const { id } = useParams();

  const [groceryItem, setGroceryItem] = useState({});

  // Use groceries stored in global state
  const globalState = useContext(GroceryContext);

  // update the grocery item whenever the globalstate changes
  useEffect(() => {
    const grocery = globalState.groceries.find(
      (item) => item.id.integerValue === id
    );

    setGroceryItem(grocery);

  }, [globalState]);

  const history = useHistory();

  // Back to home page when the user clicks the button
  const backToHome = () => {
    history.push('/');
  }

  // Check if there is a grocery item before displaying
  if (groceryItem) {
    // Display grocery item details
    return (
      <div className="details-page">
        <div className="backButtonContainer">
          <button typeof="button" onClick={backToHome}>Back</button>
        </div>
        <div className="product-details">
          <div className="img-container">
            <img src={groceryItem.img ?.stringValue} alt="Product photo" />
          </div>
          <div className="info-container">
            <h1>{groceryItem.name ?.stringValue}</h1>
            <p>$ {groceryItem.price ?.doubleValue} / {groceryItem.weight ?.integerValue} g</p>
            <p>Category: {groceryItem.category ?.stringValue}</p>
            <p>Description: {groceryItem.description ?.stringValue}</p>
          </div>
        </div>
      </div>
    )
  } else {
    <p>No item with this id was found</p>
  }
}
