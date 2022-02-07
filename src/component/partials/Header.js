import Hero from "./Hero"
import { NavLink } from "react-router-dom"

const Header = () => {
    return (
        <>
            <div className="header">
                <img src="./img/logo.png" alt="logo" />
                <div className="headerRight">
                    <nav>
                        <ul>
                            <li><NavLink to="/" style={({ isActive }) => ({
                                color: isActive ? 'black' : "grey",
                            })}>Home</NavLink></li>
                            <li><NavLink to="/destinations" style={({ isActive }) => ({
                                color: isActive ? 'black' : "grey",
                            })}>Destinations</NavLink></li>
                            <li><NavLink to="/about" style={({ isActive }) => ({
                                color: isActive ? 'black' : "grey",
                            })}>About</NavLink></li>
                            <li><NavLink to="/partner" style={({ isActive }) => ({
                                color: isActive ? 'black' : "grey",
                            })}>Partner</NavLink></li>
                        </ul>
                    </nav>
                    <button>Login</button>
                    <button>Register</button>
                </div>
            </div>
            <Hero />
        </>
    );
}

export default Header;