import React from 'react'
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import List from './pages/list/List';
import Singel from './pages/singel/Singel';
import New from './pages/new/New';
import {
  BrowserRouter, 
  Routes,
  Route,
 
} from "react-router-dom";


const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/'>
              <Route index element={<Home/>} />
              <Route path='login' element={<Login/>} />
              <Route path='users'>
                <Route index element={<List/>}/>
                <Route path=':userId' element={<Singel/>}/>
                <Route path='new' element={<New/>}/>
              </Route>
              
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
