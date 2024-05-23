"use client"

import Link from 'next/link'
import React from 'react'

import Image from 'next/image'
import { useSelector } from 'react-redux'

function Header() {
  const content = useSelector((state) => state.content.homepageContent);
  const { images } = content;
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">
    {images.map((image) => (
            <Image
              key={image.id}
              src={image.logo}
              alt="alt"
              width={120}
              height={35}
            />
          ))}
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <Link className="nav-link active" href="/about">About</Link>         
        </li>
        <li class="nav-item">
        <Link className="nav-link" href="/services">Services</Link>         
        </li>
        <li class="nav-item">
        <Link className="nav-link" href="/contact">Contact</Link>         
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  )
}

export default Header
