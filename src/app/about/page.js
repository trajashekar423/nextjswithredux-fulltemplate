"use client"

import Image from 'next/image';
import React from 'react'
import { useSelector } from 'react-redux';

function About() {
    const content = useSelector((state) => state.content.aboutpageContent);
   
  return (
    <div className='container'>
      <div className='row'>
      <div className='col'>
      <h1>About Page</h1>
    <p>{content}</p>
   
      </div>
      </div>
   
  </div>
  );
};

export default About
