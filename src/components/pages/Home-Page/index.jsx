import "./styles.css";
import { useEffect, useState, useContext } from 'react';

// Product card component
import { GroceryItem } from "../../GroceryItem/";

// Global context
import GroceryContext from "../../../context/groceryContext";

export const HomePage = () => {

  // Groceries state
  const [groceries, setGroceries] = useState([]);

  // Loading state (used to display a loading message while awaiting a response from the API)
  const [loading, setLoading] = useState([]);

  // Global context
  const globalState = useContext(GroceryContext);

  useEffect(
    () => {
      getGroceries();
    }, []
  );

  // Update global context when groceries from the API are updated
  useEffect(
    () => {
      globalState.initializeGroceryList(groceries);
    }, [groceries]
  );

  // Get groceries from the API
  const getGroceries = async () => {
    try {
      const response = await fetch('https://firestore.googleapis.com/v1/projects/itec4012-a03/databases/(default)/documents/groceries');
      const data = await response.json();

      const formattedData = data.documents.map((item) => {
        return item.fields;
      });

      // Update groceries state state
      setGroceries(formattedData);

      // Set the groceries in the global context
      globalState.initializeGroceryList(formattedData);

      // Loading state
      setLoading(false);

    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  // Map through all the grocery items from the database, and display them
  return (
    <div className="groceries-page">
      <h1>Grocery List</h1>
      <div className="groceries-container">
        {
          groceries.map((item) => (
            <GroceryItem key={item.id.integerValue} name={item.name.stringValue} price={item.price.doubleValue} img={item.img.stringValue} weight={item.weight.integerValue} id={item.id.integerValue}></GroceryItem>
          ))
        }

        {
          loading && <p>Loading data...</p>
        }
      </div>
    </div>
  )
}
