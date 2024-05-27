
"use client"

import React from 'react'


const Newsitems = ({title,description}) => {
  return (
    <div>
      <div className="card">

  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
  )
}



export default Newsitems
