import React from 'react'

const Machine = () => {
    return (
        <div className='machine'>
            <div className="top">
                <div className="title">
                    Machines are the building blocks of cloud native modernization, and managing machine identities is more complex than ever.
                </div>
                <div className="desc">
                    The shift from monolithic to cloud native, microservice-based applications has demolished the traditional perimeter, and these modern applications require orchestration of machine identities across numerous platforms. This transformation has also triggered an explosion of new machine identities, not to mention staggering levels of complexity in managing them.
                </div>
            </div>

            <div className="complex">
                <div className="comp">
                    <div className="title">
                        Complex, siloed machine
                        identity tools
                    </div>
                    <ul>
                        <li>Poor visibility</li>
                        <li>Rudimentary automation</li>
                        <li>Haphazard security</li>
                        <li>Duplicated efforts</li>
                    </ul>

                </div>
                <div className="simp">
                    <div className="title">
                        Simplified control of all
                        machine identities
                    </div>
                    <ul>
                        <li>Total observability</li>
                        <li>Secure by design</li>
                        <li>Fast and reliable</li>
                        <li>Governance and orchestration</li>
                    </ul>
                </div>

                <div className="video">

                </div>
            </div>
            <div className="down">
                <div className="title">
                    Reduce complexity with the Venafi Control Plane.
                </div>
                <div className="desc">
                    Venafi's comprehensive, industry-leading platform orchestrates machine identities across any machine, any team and any environment—from the ground to the cloud, and everywhere in between—so you can accelerate modernization, maximize uptime, eliminate security incidents and reduce revenue stream disruptions.
                </div>
            </div>
        </div>
    )
}

export default Machine