import React from "react";
import { CartWidget } from "./CartWidget";
import {NavLink, Link} from 'react-router-dom'
import { useState} from 'react'
import { useCart } from "../hooks/useCart";


const NavBar = () =>{
    const cart = useCart()
    const listItem = ["Celulares","Laptop"];
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                             <span className="navbar-toggler-icon"></span>
                        </button>
                                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                                  <ul className="navbar-nav">
                                       <li className="nav-item">
                                           <Link to="/">
                                                <a class="nav-link " aria-current="page" href="#">Home</a>
                                                </Link>
                                       </li>

                                        <div className="">
                                                    <ul className=" navbar-nav">
                                                    {listItem.map((item) => (
                                                        <li key={item}>
                                                        <NavLink
                                                            className="nav-link"
                                                            activeClassName="active"
                                                            to={`/category/${item}`}
                                                        >
                                                            {item}
                                                        </NavLink>
                                                        </li>
                                                    ))}
                                                    </ul>
                                                </div>
                                                <div className="flex h-16 md:ml-8">
                                                    <Link to="/cart">
                                                         <CartWidget numOfItems={cart.length} />
                                                    </Link>
                                                </div>
                                        
                                    </ul>
                                </div>
                         </div>
                </nav>

        </div>
    )
} 

export default NavBar