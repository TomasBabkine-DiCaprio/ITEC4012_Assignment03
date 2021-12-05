import './styles.css';
import { Link } from 'react-router-dom';

export const GroceryItem = (props) => {

    const { id, name, price, img, weight, category, expires } = props;

    return (
        <div className="groceryItem">
            <img className="grocery-img" src={img} alt={name} />
            <Link to={`/item/${id}`}>
                <h1 className="grocery-name">{name}</h1>
            </Link>
            <div className="bottomSection">
                <p>$ { price }</p>
                <p>{ weight }g</p>
            </div>
            
        </div>
    )
}