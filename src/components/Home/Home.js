// import { Outlet } from "react-router-dom";
import style from '../СommonStyle/CommoneStyle.module.css'
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';


export default function Home() {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    const userName = useSelector(authSelectors.getUserEmail);

    return (
       <>
            {isLoggedIn?(<h1 className={style.title}>{userName}, welcome to our website!</h1>):(<h1 className={style.title}>Welcome to our website!</h1>)}
 
        </>
    )
}