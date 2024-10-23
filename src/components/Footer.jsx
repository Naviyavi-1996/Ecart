import { faFacebook, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div className='min-h-80 bg-violet-900 p-10 w-100 md:grid md:grid-cols-[repeat(1,2fr)_repeat(2,1fr)_repeat(1,2fr)]'>
     <div className='text-white pe-10 mt-2'>
      <h2 className='text-3xl '><FontAwesomeIcon icon={faCartShopping} />E-cart</h2>
      <p className='mt-4 text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam incidunt ullam perferendis officia illum obcaecati ex odit cupiditate amet, ab error corrupti, iure fuga maxime nihil dolores eligendi minima modi!</p>
     </div>
     <div className='text-white mt-2'>
      <h2 className='text-3xl '>Links</h2>
      <Link to={'/'}><p className='mt-4'>Home</p></Link>
     <Link to={'/Wishlist'}> <p>Wishlist</p></Link>
     <Link to={'/cart'}> <p>Cart</p></Link>
     </div>
     <div className='text-white mt-2'>
      <h2 className='text-3xl'>Guides</h2>
      <p className='mt-4'>React</p>
      <p>React Bootstrap</p>
      <p>Bootswatch</p>
     </div>
     <div className='text-white mt-2'>
      <h2 className='text-3xl'>Contact Us</h2>
     <div className='flex mt-4'>
      <input type="text" placeholder='E-mail id' className='h-10 md:w-96'/>
      <button className='bg-orange-600 p-2 rounded-md ms-3 '>Subscribe</button>
      </div>
      <div className='mt-3 flex justify-between'>
      <FontAwesomeIcon icon={faTwitter} size='2xl '/>
      <FontAwesomeIcon icon={faLinkedinIn} size='2xl' />
      <FontAwesomeIcon icon={faFacebook}  size='2xl '/>
      <FontAwesomeIcon icon={faInstagram} size='2xl '/>
      
     </div>
     </div>
    </div>
  )
}

export default Footer