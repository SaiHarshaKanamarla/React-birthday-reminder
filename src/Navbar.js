import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navigation">
            <Link to='/'>
                <h2 className="navh2">Birthday Reminder</h2>
            </Link>
            <div className="links">
                <Link to='/Addday'>Add Birthday</Link>                
            </div>
        </nav>
     );
}
 
export default Navbar;