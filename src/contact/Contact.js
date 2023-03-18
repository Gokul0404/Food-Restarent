import React from 'react'
import '../contact/Contact.css'
// import { useNavigate } from "react-router-dom";

export default function Contact() {
  return (
    <div className='contact-page'>
   <div className='contact-div'>

<h2 className='h1'>Contact <span> Us</span></h2>

   </div>



   <div>
   <div className='conatact12'>
{/* <img src={Gif} alt="img"/> */}
  <div class="contact-form-wrapper d-flex justify-content-center">
    <form action="#" class="contact-form">
      
      <p class="description1">Thank you for your intrest in our services. Please fill out the form below or e-mail us at succes

      </p>
      <div >
        <input type="text" class="form-control rounded border-white mb-3 form-input" name='name'  id="name" placeholder="Name" required/>
      </div>
      <div >
        <input type="email" class="form-control rounded border-white mb-3 form-input d-block" name='email'  placeholder="Email" required/>
      </div>
      <div>
        <textarea id="message" class="form-control rounded border-white mb-3 form-text-area" rows="5" cols="30" placeholder="Message" required></textarea>
      </div>
      <div class="submit-button-wrapper ">
        <input type="submit" value="Send" className='btn-contact'/>
      </div>
    </form>
  </div>
</div>


   </div>
    </div>
  )
}
