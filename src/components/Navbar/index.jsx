import "./styles.css";

import {
    NavLink
} from "react-router-dom";

export const Navbar = () => {
    return(
        <nav className="navbar">
            <ul className="navbar-list">
                <li>
                    <NavLink exact={true} activeClassName="nav-selected" to="/"><h1>Grocery List</h1></NavLink>
                </li>
                <li>
                    <NavLink activeClassName="nav-selected" to="/new"><h1>New Item</h1></NavLink>
                </li>
            </ul>
        </nav>
    )
}