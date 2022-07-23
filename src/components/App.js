import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { authOperation, authSelectors } from 'redux/auth';
import PublicRoute from '../helpers/PublicRoute';
import PrivateRoute from '../helpers/PrivateRoute';
// import { Contacts, LoginView, RegisterView } from 'views';
import style from './СommonStyle/CommoneStyle.module.css';
import ContactsView from '../views/ContactsView/ContactsView';
// import LoginView from '../views/LoginView/LoginView';
// import RegisterView from '../views/RegisterView/RegisterView';
import AppBar from './AppBar/AppBar';
import Home from './Home/Home';
import PageNotFound from '../views/NotFoundView/NotFoundView';
const LoginView = lazy(() => import('../views/LoginView/LoginView.js'));
const RegisterView = lazy(() => import('../views/RegisterView/RegisterView'));
// const ContactsView = lazy(() => import('../views/ContactsView/ContactsView'));
const NotFoundView = lazy(() => import('../views/NotFoundView/NotFoundView'));

// import Navigation from '../components/Navigation/Navigation';


export default function App () {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
  dispatch(authOperation.fetchCurrentUser())
},[dispatch])

  return (
    
    
    <div className={style.container}>
      {/* {isFetchingCurrentUser?(
        <h1>Показываем React Skeleton</h1>
      ) : ( */}
      <Suspense fallback={<div>Loading...</div>}>
          <>
 
      <AppBar></AppBar>
           <Routes>
        <Route path="/" element={<PublicRoute><Home/></PublicRoute>}/ >
        <Route path="/register" element={<PublicRoute restricted><RegisterView /></PublicRoute>} />
        <Route path="/login" element={<PublicRoute redirectTo={"/contacts"} restricted><LoginView /></PublicRoute>} />
        <Route path="/contacts" element={<PrivateRoute redirectTo={"/login"}><ContactsView /></PrivateRoute>} />
        <Route path="*" element={<NotFoundView/> }></Route>
         
            </Routes>
            
          </>
      {/* ) }  */}
      </Suspense>
     </div>
  );
};
