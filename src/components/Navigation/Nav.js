import React from 'react';
import './Nav.scss';
import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';


const Nav = (props) => {
    const [isShow, setIsShow] = useState(true);
    let location = useLocation();

    useEffect(() => {
        if (location.pathname === '/login') {
            setIsShow(false)

        }
    }, [])
    return (
        <>
            {isShow === true &&
                <div className="topnav">
                    <NavLink to="/" exact>Home</NavLink>
                    <NavLink to="/login">Login</NavLink>
                    <NavLink to="/users">Users</NavLink>
                    <NavLink to="/projects">Project</NavLink>
                </div>
            }

        </>
    );
}

export default Nav;