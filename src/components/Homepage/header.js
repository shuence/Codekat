import React from 'react'
import Medium from './Medium.svg'

const Header = () => {
  return (
    <div className="header">
        <div className="header-left">
        <img src={Medium} className="App-logo" alt="logo" />
        </div>
        <div className="header-right">
            <div className="header-right-option">
                <span>Our Story</span>
            </div>
            <div className="header-right-option">
                <span>Membership</span>
            </div>
            <div className="header-right-option">
                <span>Write</span>
            </div>
            <div className="header-right-option">
                <span>Sign in</span>
            </div>
            <div className="header-right-option">
                <span><button>Get Stared</button></span>
            </div>
        </div>
    </div>
  )
}

export default Header;