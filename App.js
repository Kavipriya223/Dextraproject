import logo from './logo.svg';
import './App.css';
import Index from './Components/Index';
import Otp from './Components/Otp';
import TypeofOrder from './Components/TypeofOrder';
import Booknow from './Components/Booknow';
import { Routes, Route } from 'react-router-dom';
import Foodmenu from './Components/Foodmenu';
import { Account } from './Components/Account';
import { Cart } from './Components/Cart';
import { Delivery } from './Components/Delivery';
import { Manage } from './Components/Manage';
import { Wish } from './Components/Wish';
import Profile from './Components/Profile';
import Edit from './Components/Edit';
import { Map } from './Components/Map';
import Map1 from './Components/Map1';



function App() {
  return (
    <>
    <Routes>
    <Route path='/' element={<Index />} ></Route>
    <Route path='/otp' element={<Otp />} ></Route>
    <Route path='/type' element={<TypeofOrder />} ></Route>
    <Route path='/book' element={<Booknow />} ></Route>
    <Route path='/menu' element={<Foodmenu/>} ></Route>
    <Route path='/account' element={<Account />} ></Route>
    <Route path='/cart' element={<Cart />} ></Route>
    <Route path='/delivery' element={<Delivery />} ></Route>
    <Route path='/manage' element={<Manage/>} ></Route>
    <Route path='/wish' element={<Wish/>} ></Route>
    <Route path='/profile' element={<Profile/>} ></Route>
    <Route path='/edit' element={<Edit/>} ></Route>
    <Route path='/map' element={<Map/>} ></Route>
    <Route path='/map1' element={<Map1/>} ></Route>
    </Routes>
    {/* <Login/> */}
    {/* <Otp/> */}
    {/* <TypeofOrder/> */}
    {/* <Booknow/> */}
    </>
  );
}

export default App;
