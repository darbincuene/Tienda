import React from 'react'
import home2 from '../../componentes/HOME2'
import perro from '../../assets/perro.jpg'

export default function index() {
  return (
    <div className=' bg-slate-500'>
          <h1 className='flex justify-center mt-3.5 text-white text-2xl '>Welcome to our official Darbin store, you can see the shirts you want to buy in the men's kisses option </h1>
        <div className='flex justify-center mt-3.5 '>
        
        <img className='h-70'
         src={perro } />

        </div>
      
        
    </div>
 
  )
}
