"use client"

import Image from 'next/image';
import React from 'react'
import { useSelector } from 'react-redux';
import styles from '../css/service.module.css';
function About() {
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

    </div>
  );
};

export default About
