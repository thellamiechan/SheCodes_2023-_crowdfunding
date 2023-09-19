import { Link, Outlet } from "react-router-dom"
import useAuth from "../hooks/useAuth.js"

function NavBar( ) {
    const {auth, setAuth} = useAuth();

    const handleLogout = () => {
        window.localStorage.removeItem("token");
        setAuth({ token: null });
    };

    return (
        <div>
            <nav> 
                <Link to='/'>Home </Link>
                <Link to="/about">About </Link>
                <Link to="/contact">Contact </Link>
                <Link to="/projects">Create a Project </Link>
                {auth.token ? (
                    <link to="/" onClick={handleLogout}></link>
                    ) : (
                <Link to="/login">Login</Link>
                )}
            </nav>
        <Outlet />
    </div>
    );
}
export default NavBar;