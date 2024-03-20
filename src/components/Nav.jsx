import React from 'react'
import {FaSearch} from "react-icons/fa"

const Nav = () => {
  return (
    <nav>
        <div className="left">
            <div className="save">
                Save Up T200$
            </div>
            <div className="brew">We're brewing a security revolution... #MIMSummit2024</div>
        </div>
        <div className="right">
            <div className="openSource">Open Source  </div>
            <div className="login">Login</div>
            <div className="searchLogo"><FaSearch /></div>
        </div>
    </nav>
  )
}

export default Nav