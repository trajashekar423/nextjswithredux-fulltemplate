"use client"

import React from 'react'
import { useSelector } from 'react-redux';


function Contact() {
    const content = useSelector((state) => state.content.aboutpageContent);
  return (
    <div>
        <h1>Contact</h1>

        <p>{content}</p>
    </div>
  )
}

export default Contact
