
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    const activeStyle = "text-orange-600 font-bold";

    return (
        <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
            <div><Link to="/" className="text-red-600 text-xl font-bold" >Pizza</Link></div>
            
            <ul className="flex space-x-6 text-gray-700 text-md">
                <li>
                    <Link to="/" className={location.pathname === "/" ? activeStyle : ""}>Home</Link>
                </li>
                <li>
                    <Link to="/products" className={location.pathname === "/products" ? activeStyle : ""}>Products</Link>
                </li>
                <li><Link to="/cart" className={location.pathname === "/cart" ? activeStyle : ""}> Cart🛒</Link></li>
                <li>
                    <Link to="/order" className={location.pathname === "/order" ? activeStyle : ""}>Order</Link>
                </li>
                
                
                   
            </ul>

        </nav>
    );
};

export default Navbar;
