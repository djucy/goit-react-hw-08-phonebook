import { useSelector } from "react-redux";
import { authSelectors } from "redux/auth";
import {  Navigate } from "react-router-dom";


export default function PublicRoute({
    children,
    restricted = false,
    redirectTo = '/',
    ...routeProps
    
}) {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    const shouldRedirect = isLoggedIn && restricted;

    if(shouldRedirect) {
        return <Navigate to={redirectTo}/>
        }
    return children;

}
