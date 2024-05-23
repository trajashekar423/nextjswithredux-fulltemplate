"use client"

import React from 'react'
import { useSelector } from 'react-redux';

function Footer() {
    const footerlinks = useSelector((state) => state.content.footerlinks);
    const homepageContent = useSelector((state) => state.content.homepageContent);  
    const { Links,copyright} = footerlinks;
   
  return (
    <div>
      <div className="container">
  <footer className="py-3 my-4">   
 
           
              <ul className='nav justify-content-center border-bottom pb-3 mb-3'>       
              {footerlinks.map(myfooter => (
            <li className="nav-item"key={myfooter.Links}>
            <a href="#" className="nav-link px-2 text-body-secondary">{myfooter.Links}</a>
            </li>
         
         ))}
        </ul>
             <p>{copyright}</p>
     
  </footer>
</div>
    </div>
  )
}

export default Footer
