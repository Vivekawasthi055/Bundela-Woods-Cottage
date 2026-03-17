import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  const bookingUrl = "https://www.booking.com/hotel/in/bundela-woods-cottage-and-restaurant.en-gb.html"

  return (
    <nav className={`navbar ${scrolled || !isHome ? 'scrolled' : ''} ${mobileOpen ? 'mobile-open' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-text">Bundela Woods</span>
          <span className="logo-subtitle">Cottage & Restaurant</span>
        </Link>

        <button 
          className="mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`navbar-menu ${mobileOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/rooms" className="nav-link">Rooms</Link>
          <Link to="/gallery" className="nav-link">Gallery</Link>
          <Link to="/reviews" className="nav-link">Reviews</Link>
          <Link to="/contact" className="nav-link">Contact Us</Link>
          <a 
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link book-now-btn"
          >
            Book Now
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
