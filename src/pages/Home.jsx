import React from 'react'
import Nav from '../components/Nav'
import NavMain from '../components/NavMain'
import Hero from '../components/Hero'
import OpenSourceHr from '../components/OpenSourceHr'
import Companies from '../components/Companies'
import Cards from '../components/Cards'
import LearnMore from '../components/LearnMore'
import Machine from '../components/Machine'


const Home = () => {
  return (
    <>
        <div className="nav">
            <Nav />   
            <NavMain />
        </div>
        <Hero />
        <OpenSourceHr />
        <Companies />
        <Cards />
        <LearnMore />
        <Machine />
    </>
  )
}

export default Home