import { useDispatch, useSelector } from 'react-redux';
import { authSelectors,authOperation } from 'redux/auth';
import avatarDefault from './icon-user.png';
import style from './UserMenu.module.css'



export default function UserMenu() {
    const dispath = useDispatch();
    const email = useSelector(authSelectors.getUserEmail)
    const avatar = avatarDefault
console.log(email)



    return (
        <div className={style.userBox}>
            <img src={avatar} alt='User avatar' width='32'></img>
            <span className={style.email}> {email }</span>
            <button type='button' onClick={() => dispath(authOperation.logOut())}
            className={style.button}>Logout</button>
            




        </div>


    )
 }