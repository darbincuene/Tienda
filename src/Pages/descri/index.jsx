import React from 'react'
import darbin from "../../assets/darbin.jpeg"


export default function index() {
  return (
    <div className='flex justify-center pt-4'>
        <div className='p-2  w-96 h-48 bg-slate-400 '>
          <img src={darbin}
          className='w-70 h-48' />
            <p>Hello, my name is Darbin, I am 19 years old,
                 I am from Morales, Cauca, I have 3 sisters,
                  I am studying software development, 
                  what I am most passionate about is soccer and I 
                  want to visit the Camp Nou of FC Barcelona,
                   ​​and I also want to know a lot of places and 
                   above all I want smile at life and know that
                    everything I wanted I achieved.</p>
        </div>
        
    </div>
 
  )
}