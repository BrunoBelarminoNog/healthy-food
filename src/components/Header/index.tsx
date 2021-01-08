import React, { useState } from 'react';
import {Link, NavLink, useLocation} from 'react-router-dom';
import { BsPersonLinesFill } from 'react-icons/bs'

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
    let className = "navbar-nav"

    if(location === "/register") {
        className = "navbar-nav nav-register"
    } 
    if (location === "/") {
        className = "navbar-nav"
    }
 
    return (
        <HeaderContainer>
            <nav className="navbar navbar-expand-md">
                <div className="container-fluid header-menu">
                    <Link to="/" className="logo">
                        <Logo className="navbar-brand">
                                Healthy Food
                        </Logo>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon">
                            <div id="burger" className={openBurger ? "open" : "closed"} onClick={handleBurgerMenu}>
                                <div />
                                <div />
                                <div />
                            </div>
                        </span>
                    </button>
                    <Menus className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className={className}>
                            <li className="nav-item ">
                                <NavLink to="#" className="nav-link" >
                                    Healthy Recipes
                                </NavLink>
                            </li>
                            <li className="nav-item ">
                                <NavLink to="#" className="nav-link" >
                                    Blog
                                </NavLink>
                            </li>
                            <li className="nav-item ">
                                <NavLink to="#" className="nav-link" >
                                    Join
                                </NavLink>
                            </li>
                            <li className="nav-item ">
                                <NavLink to="/register" className="nav-link btn btn-light register">
                                    Register
                                </NavLink>
                            </li>
                        </ul>
                    </Menus>
                </div>
            </nav>
        </HeaderContainer>
    )
}