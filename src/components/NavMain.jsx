import React from 'react'
import img from '../assets/WWC_PNG-03.png'

import {FaCaretDown} from "react-icons/fa"

const NavMain = () => {
  return (
    <div className='navMain' >
        <div className="logo">
            <img src={img} alt="" />
        </div>
        <ul>
            <li>Regulatory Compliance <FaCaretDown /></li>
            <li>Laboratory Solutions  <FaCaretDown /> </li>
            <li>Manufacturing Solutions  <FaCaretDown /> </li>
            <li>Testing Equipment & Projects  <FaCaretDown /> </li>
            <li>Corporate Compliance  <FaCaretDown /> </li>
            <li>Marketing & Software Solution  <FaCaretDown /> </li>
        </ul>
        <div className="free">
            <div className="freeTrial">Free Trial</div>
            <div className="tte">Talk To Expert</div>
        </div>
    </div>
  )
}

export default NavMain