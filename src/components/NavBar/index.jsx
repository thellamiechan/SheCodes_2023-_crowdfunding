import { Link, Outlet } from "react-router-dom"

function NavBar( ) {
    return (
        <div>
            <div> 
                <Link to='/'>Home </Link>
                <Link to="/login">Log In </Link>
                <Link to="/about">About </Link>
            </div>
        <Outlet />
    </div>
    );
}
export default NavBar;