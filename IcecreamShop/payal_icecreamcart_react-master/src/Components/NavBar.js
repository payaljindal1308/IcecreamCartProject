import { Link } from "react-router-dom";
export const NavBar = () => {
    return (
        <nav>
        <div><Link to='/'>Home</Link></div>
        <div>
            <Link to="/cart">Cart</Link>
            <Link to='/orders'>Orders</Link>
        </div>
        </nav>
    )
}