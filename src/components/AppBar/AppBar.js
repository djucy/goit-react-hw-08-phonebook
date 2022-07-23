import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import Navigation from '../Navigation/Navigation';
import AuthNav from '../AuthNav/AuthNav';
import UserMenu from 'components/UserMenu/UserMenu';
import style from './AppBar.module.css'



export default function AppBar() {
const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)
    
    return (
        <header className={style.header} >
            <Navigation />
            {isLoggedIn? <UserMenu></UserMenu>: <AuthNav></AuthNav> }
            
          


    </header>

)



}