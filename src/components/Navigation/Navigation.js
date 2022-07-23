import { NavLink, Outlet } from 'react-router-dom';
import style from './Navigation.module.css'
import { authSelectors } from 'redux/auth';
import { useSelector } from 'react-redux';

export default function Navigation() {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)
    return (
        <nav>
            <ul className={style.list}>
                <li className={style.item}>
                    <NavLink to="/" className={({isActive})=>isActive?style.activeLink:style.link }>Home</NavLink> 
                 
                     
                </li>
               
                <li>
                    {isLoggedIn&&<NavLink to="/contacts"  className={({isActive})=>isActive?style.activeLink:style.link}>Contacts</NavLink>}
                </li>
             <Outlet/>
            </ul>
        </nav>

    )
}

         