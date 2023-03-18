import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { CurrencyDollar } from 'react-bootstrap-icons'
import '../panner/Paneer.css'

export default function Paneer() {
  return (
    <div className='paneer-food'>

<div className='biriyani'>
      
      <div className='biriyani-head'>
      
      <span className='start-head'>
      <h2 className='h1'>Paneer Mania</h2>
      <p>WHAT IN THE BEGINNING</p>
      
      </span>
      
      
      <div className='start-cards'>
      
      <div className='spl-main'>
      
      <Container md={12} className='spl-food-container'>
      
      <Row className='spl-row'>
      
      <Col md={4}> <div className='imgoutline'><Image className='speacialimg1' src={require('../panner/paneerimg/panner1.jpg')} width="100%" height='250vh'></Image></div>
      <div className='imgname'>
      
      <h4>Dry-Aged Rump Steak</h4>
      <p>Asparagus / Tomato / Salad</p>
      <h4><CurrencyDollar/>25</h4>
      
      
      </div>
      
      </Col>
      
      <Col md={4} > <div className='imgoutline'><Image className='speacialimg1' src={require('../panner/paneerimg/panner2.jpg')} width="100%" height='250vh'></Image></div>
      <div className='imgname'>
      
      <h4>Eggs in Tomoto Sauce</h4>
      <p>Beef / Spaghetti / Salad</p>
      <h4><CurrencyDollar/>14</h4>
      
      
      </div>
      </Col>
      <Col md={4}><div className='imgoutline'> <Image className='speacialimg1' src={require('../panner/paneerimg/panner3.jpg')} width="100%" height='250vh'></Image></div>
      
      <div className='imgname'>
      
      <h4>Roastbeef</h4>
      <p>Vegetables / Mustard / Sauce</p>
      <h4><CurrencyDollar/>19</h4>
      
      
      </div>
      </Col>
      </Row>
      <Row className='spl-row'>
      
      <Col md={4}> <div className='imgoutline'><Image className='speacialimg1' src={require('../panner/paneerimg/panner4.jpg')} width="100%" height='250vh'></Image></div>
      
      <div className='imgname'>
      
      <h4>Pesto Noodles</h4>
      <p>Tomatoes / Veggies</p>
      <h4><CurrencyDollar/>13</h4>
      
      
      </div>
      </Col>
      <Col md={4}> <div className='imgoutline'><Image className='speacialimg1' src={require('../panner/paneerimg/panner5.jpg')} width="100%" height='250vh'></Image></div>
      
      <div className='imgname'>
      
      <h4>Avocado Breads</h4>
      <p>Wholegrain Bread / Eggs</p>
      <h4><CurrencyDollar/>9</h4>
      
      
      </div>
      </Col>
      <Col md={4}> <div className='imgoutline'><Image className='speacialimg1' src={require('../panner/paneerimg/panner6.jpg')} width="100%" height='250vh'></Image></div>
      <div className='imgname'>
      
      <h4>Teriyaki Salmon</h4>
      <p>Soy Sauce / Sesame / Seasoning</p>
      <h4><CurrencyDollar/>25</h4>
      
      
      </div>
      </Col>
      </Row>
      
      
      </Container>
      
            </div>
      
            </div>
      </div>
      
      
      
      {/* secound line */}
      
      
      
      
      
          </div>
      
    </div>
  )
}
