import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <>
        <div className="hero-section hero-background">
        <h1 className="page-title">Organic Fruits</h1>
    </div>

    
    <div className="container">
        <nav className="biolife-nav">
            <ul>
                <li className="nav-item"><Link href="#" className="permal-link">Home</Link></li>
                <li className="nav-item"><span className="current-page">Contact</span></li>
            </ul>
        </nav>
    </div>
    <div className='container'>
      <div className='row'>
      <div className='col-12 col-lg-12 col-md-12 col-sm-12'>
        Contact Page will coming soon
      </div>
      </div>
    </div>

    </>
  )
}

export default Contact
