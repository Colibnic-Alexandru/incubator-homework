import React from 'react'
import {NavLink} from "react-router-dom"
import {PATH} from "./Pages";
import style from "./Header.module.css"

function Header() {
    return (
        <div className={style.header}>
            <NavLink to={PATH.PRE_JUNIOR} className={style.navLink}>Pre-Junior</NavLink>
            <NavLink to={PATH.JUNIOR} className={style.navLink}>Junior</NavLink>
            <NavLink to={PATH.JUNIOR_PLUS} className={style.navLink}>Junior-Plus</NavLink>
            <div className={style.el}>Menu</div>
        </div>
    )
}

export default Header
