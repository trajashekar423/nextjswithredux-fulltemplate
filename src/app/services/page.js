"use client"

import React from 'react'
import { useSelector } from 'react-redux';
import styles from '../css/service.module.css';


import Image from 'next/image';
function Myyservices() {
  const servicepageContent = useSelector((state) => state.content.servicepageContent);
  const {introduction,servicesimages} = servicepageContent;
  const homepageContent = useSelector((state) => state.content.homepageContent);
  const {welcomeMessage,herocontent,button1} = homepageContent;
  return (
    <div>
        <div className='container-fluid'>
            <div className='row'>
                <div className={styles.nomargin}>
                    <div className='servicebanner'>
                    <div className={styles.servicebanner}>
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">{welcomeMessage}{herocontent}</h1>
        <p className="col-md-8 fs-4">{herocontent} {introduction}</p>
        <button className="btn btn-primary btn-lg" type="button">{button1}</button>
      </div>
    </div>
                    </div>
                </div>
            </div>

        </div>

    <div className='container'>
    <div className='row'>
      <div className='col'>
        <div className='server'>
        {servicesimages.map(servicesimages => (
            <div key={servicesimages.id} className='col-sm-4'>
            <Image src={servicesimages.team} alt="alt" width={500} height={545}
            />
        </div>
          ))}
        </div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Myyservices
