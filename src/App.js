
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



import HomeContents from './Homepage/Quates/HomeContents/HomeContents';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './Layout';

import About from './About/About';

import Contact from './contact/Contact';
import Menu from './Homepage/menu/Menu'
import Biriyani from './Homepage/menu/biriyani/Biriyani';
import Chiken from './Homepage/menu/chiken/Chiken';
import Chines from './Homepage/menu/chines/Chines';
import Paneer from './Homepage/menu/panner/Paneer';
import Veg from './Homepage/menu/veg/Veg';



const router=createBrowserRouter(

  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
<Route index element={<HomeContents/>}/>
<Route path='about' element={<About/>}/>

<Route path='menu' element={<Menu/>}/>
<Route path='contact' element={<Contact/>}/>



<Route path='biriyani' element={<Biriyani/>}/>
<Route path='chiken' element={<Chiken/>}/>
<Route path='chines' element={<Chines/>}/>
<Route path='paneer' element={<Paneer/>}/>
<Route path='veg' element={<Veg/>}/>



    </Route>
  )
)

function App() {

  return (
    <div className="App">
   

<RouterProvider router={router}/>
   {/* <NavbarMain/>
   <HomeContents/> */}
   
    </div>
  );
}

export default App;
