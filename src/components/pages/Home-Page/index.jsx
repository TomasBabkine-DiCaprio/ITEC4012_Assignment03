import "./styles.css";
import { useEffect, useState } from 'react';

// Router
import { useHistory } from "react-router";

// Product card component
import { GroceryItem } from "../../GroceryItem/";

export const HomePage = () => {

    // Groceries state
    const [groceries, setGroceries] = useState([]);

    // Loading state (used to display a loading message while awaiting a response from the API)
    const [loading, setLoading] = useState([]);

    useEffect(
        () => {
            getGroceries();
        }, []
    );

    // Get groceries from the API
    const getGroceries = async() => {
        try {
            const response = await fetch('https://firestore.googleapis.com/v1/projects/itec4012-a03/databases/(default)/documents/groceries');
            const data = await response.json();

            const formattedData = data.documents.map( (item) => {
                return item.fields;
            })

            setGroceries(formattedData);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    // Router history
    const history = useHistory();

    return (
        <div className="groceries-page">
            <h1>Grocery List</h1>
            <div className="groceries-container">
                {
                    groceries.map( (item) => (
                        <GroceryItem key={item.id.integerValue} name={item.name.stringValue} price={item.price.doubleValue} img={item.img.stringValue} ></GroceryItem>
                    ))
                }
            </div>
        </div>
    )
}