import { NavLink, Outlet } from 'react-router-dom';

export default function Navigation() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink> 
                    
                      <Outlet/>
                </li>
               
                <li>
                    <NavLink to="/contacts">Contacts</NavLink>
                </li>
            
            </ul>
        </nav>

    )
}

         