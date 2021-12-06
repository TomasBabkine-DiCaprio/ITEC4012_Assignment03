import './styles.css';

import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';

// Import the global state
import GroceryContext from '../../../context/groceryContext';

export const GroceryDetailPage = (props) => {

  // Get id from the URL
  const { id } = useParams();

  const [groceryItem, setGroceryItem] = useState({});

  // Global state where all the grocery items info are stored
  const globalState = useContext(GroceryContext);

  useEffect(() => {
    const grocery = globalState.groceries.find(
      (item) => item.id.stringValue === id
    );
    setGroceryItem(grocery);
  }, []);

  return (
    <div>Now showing {id}
      <img src={groceryItem.image?.stringValue} />
  )
}
