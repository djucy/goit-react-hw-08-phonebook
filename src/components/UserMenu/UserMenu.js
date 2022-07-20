import { useDispatch, useSelector } from 'react-redux';
import { authSelectors,authOperation } from 'redux/auth';
import avatarDefault from './icon-user.png';


export default function UserMenu() {
    const dispath = useDispatch();
    const email = useSelector(authSelectors.getUserEmail)
    const avatar = avatarDefault
console.log(email)



    return (
        <div>
            <img src={avatar} alt='User avatar' width='32'></img>
            <span >User {email }</span>
            <button type='button' onClick={()=>dispath(authOperation.logOut())}>Logout</button>
            




        </div>


    )
 }