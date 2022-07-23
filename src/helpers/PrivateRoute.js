import { useSelector } from "react-redux";
import { authSelectors } from "redux/auth";
import {  Navigate } from "react-router-dom";

export default function PrivateRoute({
    children,
    redirectTo = '/',
 ...routeProps
}) {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
     if(isLoggedIn) {
        return children
    }
    return <Navigate to={redirectTo} />

    
    ;
}

