import React from 'react'
import {FaAddressCard,FaTools, FaStackpath, FaArrowRight} from "react-icons/fa"

const LearnMore = () => {
  return (
    <div className='learnMore'>
        <div className="card">
            <div className="logo">
                <FaAddressCard />
            </div>
            <div className="title">
            For Executives
            </div>
            <div className="desc">
            CIO Study: Certificate-Related Outages Continue to Plague Organizations
            </div>
            <div className="learn">
                Learn More <FaArrowRight />                                
            </div>
        </div>
        <div className="card">
            <div className="logo">
                <FaTools />
            </div>
            <div className="title">
            For Architects
            </div>
            <div className="desc">
            Machine Identity Management Architecture
            </div>
            <div className="learn">
                Learn More <FaArrowRight />                
            </div>
        </div>
        <div className="card">
            <div className="logo">
                <FaStackpath />
            </div>
            <div className="title">
            For Practitioners
            </div>
            <div className="desc">
            Certificate Misconfiguration is the #1 Kubernetes Security Threat
            </div>
            <div className="learn">
                Learn More <FaArrowRight />                
            </div>
        </div>
    </div>
  )
}

export default LearnMore