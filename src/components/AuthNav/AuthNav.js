import { NavLink, Outlet } from "react-router-dom";


export default function AuthNav() {

    return (
        <ul>
            <li>
                <NavLink to="/register">Registration</NavLink>
            </li>
            <li>
                <NavLink to="/login">Login</NavLink>
        </li>
           
           <Outlet/>

        </ul>
    )
 }