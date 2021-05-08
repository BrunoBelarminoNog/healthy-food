import React, { useState } from 'react';
import {Link, NavLink, useLocation} from 'react-router-dom';

import { HeaderContainer, Logo, Menus} from './styles'


export default function Header() {
   
    /**** BURGUER MENU  ****/
    const [openBurger, setOpenBurger] = useState(false)

    function handleBurgerMenu() {
        const burger = document.querySelector('#burger')

        if (!burger) return

        if (burger.classList.value === 'closed') {
            setOpenBurger(true)
        }

        if (burger.classList.value === 'open') {
            setOpenBurger(false)
        }
    }

    let location = useLocation().pathname
    let className = ""

    if(location === "/register") {
        className = "nav-register"
    } 
    if (location === "/") {
        className = ""
    }
 
    return (
        <HeaderContainer>
            <nav>
                <div>
                    <Link to="/" className="logo">
                        <Logo className="navbar-brand">
                            Healthy Food
                        </Logo>
                    </Link>
                    <div id="burger" className={openBurger ? "open" : "closed"} onClick={handleBurgerMenu}>
                        <div />
                        <div />
                        <div />
                    </div>
                    <div id="burguer-menu" className={openBurger ? "open" : "closed"}>
                        <Menus className={openBurger ? "open" : "closed"} id="burguer-menu" >
                            <div className={className}>
                                <NavLink to="#" className="navlink " onClick={handleBurgerMenu}>
                                    Healthy Recipes
                                </NavLink>
                                <NavLink to="#" className="navlink " onClick={handleBurgerMenu}>
                                    Blog
                                </NavLink>
                                <NavLink to="#" className="navlink " onClick={handleBurgerMenu}>
                                    Join
                                </NavLink>
                                <NavLink to="/register" className="navlink btn btn-light register" onClick={handleBurgerMenu}>
                                    Register
                                </NavLink>
                            </div>
                        </Menus>
                    </div>
                </div>
            </nav>

        </HeaderContainer>
    )
}




