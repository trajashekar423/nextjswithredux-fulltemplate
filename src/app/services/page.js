"use client"

import React from 'react'
import { useSelector } from 'react-redux';

function Myyservices() {
  const servicepageContent = useSelector((state) => state.content.servicepageContent);    
  const homepageContent = useSelector((state) => state.content.homepageContent);
  const {introduction,} = servicepageContent;
  const {welcomeMessage,herocontent,button1,images} = homepageContent;
  return (
    <div>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col'>
                    <div className='servicebanner'>
                    <div class="p-5 mb-4 bg-body-tertiary rounded-3">
      <div class="container-fluid py-5">
        <h1 class="display-5 fw-bold">{welcomeMessage}{herocontent}</h1>
        <p class="col-md-8 fs-4">{herocontent} {introduction}</p>
        <button class="btn btn-primary btn-lg" type="button">{button1}</button>
      </div>
    </div>
                    </div>
                </div>
            </div>

        </div>

    {/* <div className='container-fluid'>
    <div className='row'>
      <div className='col'>
      <div className='banner-image'>
      {images.map((newimage) => (
            <Image
              key={newimage.id}
              src={newimage.logo}
              alt="alt"
              width={120}
              height={35}
            />
          ))}
      </div>
      </div>
    </div>
    </div> */}
    </div>
  )
}

export default Myyservices
