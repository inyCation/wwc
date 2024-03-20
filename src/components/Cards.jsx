import React from 'react'
import {FaArrowRight} from "react-icons/fa"
import img from "../assets/athena-callout-graphic.png"
import img2 from "../assets/summit-promo.jpg"



const Cards = () => {
  return (
    <div className='cards'>
        <div className="card">
            <div className="left">
                <img src={img} alt="" />
            </div>
            <div className="right">
                <div className="title">
                Get To Know Venafi Athena <FaArrowRight />
                </div>
                <div className="desc">
                Simplify and accelerate machine identity orchestration with AI technology.
                </div>
            </div>
        </div>
        <div className="card">
            <div className="left">
                <img src={img2} alt="" />
            </div>
            <div className="right">
                <div className="title">
                Help us forge a new era in cybersecurity <FaArrowRight />
                </div>
                <div className="desc">
                Boston, Oct. 1-3 | Explore the most visionary trends shaping machine identity and security.
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cards