import { NavLink, Outlet } from 'react-router-dom';

export default function Navigation() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink> 
                    
                     
                </li>
               
                <li>
                    <NavLink to="/contacts">Contacts</NavLink>
                </li>
             <Outlet/>
            </ul>
        </nav>

    )
}

         