import React from 'react'
import Biriyani from './biriyani/Biriyani'

import '../menu/Menu.css'
import {Image} from 'react-bootstrap'
import Chiken from './chiken/Chiken'
import Chines from './chines/Chines'
import Paneer from './panner/Paneer'
import Veg from './veg/Veg'


export default function Menu() {
  return (


    <>
    <div className='menu-haed'>


<div className='menu-head-point'>
<span className='menu-div'>

<h1>Food At First Sight</h1>
<p> OUR  RESTAURANT MENU</p>
</span>
</div>

<div className='img-round-shap'>
<Image className='menu-images-round' src={require('../menu/menuimg/menu6.png')} width="50%" height='70%'></Image>

</div>

<div className='menu-img'></div>
{/* <Container fluid>
  <Row>
<Col className='menu-col'>
 
<Image className='menu-images' src={require('../menu/menuimg/menu1.jpg')} width="20%" height='70%'></Image>

<Image className='menu-images' src={require('../menu/menuimg/menu2.jpg')} width="20%" height='70%'></Image>
<Image className='menu-images' src={require('../menu/menuimg/menu3.jpg')} width="20%" height='70%'></Image>
<Image className='menu-images' src={require('../menu/menuimg/menu4.jpg')} width="20%" height='70%'></Image>
</Col>
</Row>
</Container> */}
    </div>
    <Biriyani/>

    <Chiken/>

    <Chines/>

    <Paneer/>
    <Veg/>
    </>
  )
}
