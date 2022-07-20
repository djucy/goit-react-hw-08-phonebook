import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { authOperation } from 'redux/auth';
// import { Contacts, LoginView, RegisterView } from 'views';
import Contacts from '../views/Contacts/Contacts';
import LoginView from '../views/LoginView/LoginView';
import RegisterView from '../views/RegisterView/RegisterView';
import AppBar from './AppBar/AppBar';
import Home from './Home/Home'
// import Navigation from '../components/Navigation/Navigation';


export default function App () {
  const dispatch = useDispatch();

  useEffect(() => {
  dispatch(authOperation.fetchCurrentUser())
},[dispatch])

  return (
    
    
    <>
      
      
     <AppBar></AppBar>
      <Routes>
        <Route path="/" element={<Home/>} >
          <Route path="/register" element={<RegisterView />} />
        <Route path="/login" element={<LoginView />} />
        </Route>
       
        
        <Route path="/contacts" element={<Contacts />} />


      </Routes></>
  );
};
