import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../../hooks/use-auth.js";
import "./NavBar.css";

function NavBar() {
    const { auth, setAuth } = useAuth();

    const handleLogout = () => {
        window.localStorage.removeItem("token");
        setAuth({ token: null });
    };

    console.log(auth)

    return (
        <div>
            <nav className='navbar'>

                {/* LOGO */}
                <div className='logo'>Bookarina</div>

                {/* NAVIGATION MENU */}
                <ul className='nav-links'>
                    <Link to='/'>Home </Link>
                    {auth.token == null && (
                        <>
                            <Link to='/users/'>Create an Account  </Link>
                        </>
                    )}
                    {auth.token && (
                        <>
                            <Link to='/projects/'>Create a Project </Link>
                        </>
                    )}
                    {auth.token ? (
                        <Link to='/' onClick={handleLogout}>
                            Log Out
                        </Link>
                    ) : (
                        <Link to='/login/'>Login</Link>
                    )}

                </ul>
            </nav>
            <Outlet />
        </div>
    );
};

export default NavBar;