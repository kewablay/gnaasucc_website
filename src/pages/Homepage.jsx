import React from 'react'
import {Navbar, Header,SocialMedia, Footer} from '../components/layout'
import { WeeklyActivities, Events, Departments,
   WeMakePeopleSmile, Outreach, SupportUs, LocateUs } from '../components/Homepage'


function Homepage() {
  return (
    <>
       <Navbar />
       <Header />
       <WeeklyActivities />
       <Events /> 
       <Departments />
       <WeMakePeopleSmile />
       <Outreach />
       <SupportUs /> 
       <LocateUs /> 
       <SocialMedia />
       <Footer />
    </>
  )
}

export default Homepage