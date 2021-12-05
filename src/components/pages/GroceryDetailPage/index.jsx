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
    console.log(globalState);

    useEffect( () => {

    }, []);

    return (
        <div>Now showing {id}</div>
    )

}