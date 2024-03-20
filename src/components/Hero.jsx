import React from 'react'
import {FaArrowRight} from "react-icons/fa"



const Hero = () => {
  return (
    <main>
        <div className="title">The World Leader in Machine Identity Management</div>
        <div className="desc">
        Eliminate application outages, prevent breaches and accelerate cloud native development with complete visibility and automation of your machine identities, such as digital keys and certificates.
        </div>
        <div className="why">
        Why modern machine identity management is critical to cybersecurity
        <FaArrowRight />
        </div>

        <div className="free">
            <div className="freeTrial">Free Trial</div>
            <div className="tte">Talk To Expert</div>
        </div>
    </main>
  )
}

export default Hero