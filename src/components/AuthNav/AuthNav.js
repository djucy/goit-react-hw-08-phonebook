import { NavLink, Outlet } from "react-router-dom";
import style from './AuthNav.module.css';


export default function AuthNav() {

    return (
        <ul className={style.list}>
            <li className={style.item}>
                <NavLink to="/register" className={style.link}>Sign up</NavLink>
            </li>
            <li className={style.item}>
                <NavLink to="/login"  className={style.link}>Sign in</NavLink>
        </li>
           
           <Outlet/>

        </ul>
    )
 }