import React from 'react'
import { faCartShopping,faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux'
import { removeWishlistItem } from '../redux/slices/slices/wishlistSlice'
import { addItemToCart } from '../redux/slices/slices/cartSlice'
function Wishlist() {
  const wishlistArray=useSelector((state)=>state.Wishlist)
  console.log(wishlistArray);
  const dispatch=useDispatch()
  const wishes=(item)=>
  {
    dispatch(addItemToCart(item))
    dispatch(removeWishlistItem(item.id))
  }
  return (
<>
<h1 className='pt-32 text-center text-4xl text-violet-900'>Wishlist</h1>
     { wishlistArray?.length>0 ?
     <div className='mt-5 mb-10 px-10 md:grid grid-cols-4'>
      {wishlistArray?.map((item)=>(<div className='p-2'>
       <div className='p-3 rounded shadow-lg'>
         <img src={item?.image}alt="no image" className='w-full h-60'/>
         <h4 className='text-center text-2xl'>{item?.title.slice(0,25)}...</h4>
         <p className='text-justify'>{item?.description.slice(0,100)}...</p>
         <p className='text-2xl'>price:<span className='text-violet-600'>${item?.price}</span></p>
         <div className='flex justify-between'>
           <button onClick={()=>dispatch(removeWishlistItem(item?.id))} className='p-3 bg-red-700 text-white'><FontAwesomeIcon icon={faTrashCan} /></button>
           <button onClick={()=>wishes(item)} className='p-3 bg-green-700 text-white'><FontAwesomeIcon icon={faCartShopping} /></button>
         </div>
       </div>
      </div>))}
     </div>
     :
     <div className='w-full mt-10 md:grid grid-cols-3'>
         <div></div>
         <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLSz1SYhpDvBfqDubCPfMflLOfO9rk87MNhw&s" alt="no image" className='w-full h-80'/>
         </div>
         <div></div>
     </div>}
</>
  )
}

export default Wishlist