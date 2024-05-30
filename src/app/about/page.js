"use client"

import Image from 'next/image';
import React from 'react'
import { useSelector } from 'react-redux';
import styles from '../css/about.module.css';
function About() {
  const servicepageContent = useSelector((state) => state.content.servicepageContent);   
  const {introduction,servicesimages} = servicepageContent; 
  const homepageContent = useSelector((state) => state.content.homepageContent);
  const {welcomeMessage,herocontent,button1,bannerlogo,images} = homepageContent;
  
  return (
    <div >
      <section className={styles.aboutbanner}>     
        <div className='container-fluid'>
            <div className='row'>                
                    <div className='aboutbanner py-2'>
                    <div className={styles.aboutbanner}>
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">{welcomeMessage}{herocontent}</h1>
        <p className="col-md-8 fs-4">{herocontent} {introduction}</p>
       
        <button className="btn btn-primary btn-lg" type="button">{button1}</button>
      </div>
    </div>
                    </div>
               
            </div>

        </div>
        </section>

<div className='container mt-5'>
<div class="row featurette align-items-center">
      <div class="col-md-6 order-md-2">
        <h2 class="">Realize your digital potential with Martex <span class="text-body-secondary">Build a customer-centric marketing strategy</span></h2>
        <p class="lead">Sodales tempor sapien quaerat ipsum undo congue laoreet turpis neque auctor turpis vitae dolor luctus placerat magna and ligula cursus purus vitae purus an ipsum suscipit

</p>
      </div>
      <div class="col-md-6 order-md-1">      
      {servicesimages.map(servicesimages => (
            <div key={servicesimages.id} className='col-sm-12'>
            <Image src={servicesimages.About} alt="alt" width={500} height={545}
            />
        </div>
          ))}
      </div>
    </div>
</div>
      
        
       
    </div>
  );
};

export default About
