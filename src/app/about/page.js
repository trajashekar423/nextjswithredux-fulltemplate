"use client"


import React from 'react'
import { useSelector } from 'react-redux';

function About() {
    const content = useSelector((state) => state.content.aboutpageContent);
  return (
    <div>
    <h1>About Page</h1>
    <p>{content}</p>
  </div>
  )
}

export default About
