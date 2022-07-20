import Navigation from '../Navigation/Navigation';
import AuthNav from '../AuthNav/AuthNav';
import UserMenu  from 'components/UserMenu/UserMenu';



export default function AppBar() {
    
    return (
        <header>
            <Navigation />
            <AuthNav></AuthNav> 
         <UserMenu></UserMenu>   


    </header>

)



}