import React from 'react'
import {Navbar, Header,SocialMedia, Footer} from '../components/layout'
import { WeeklyActivities, Events, Departments, UpcomingActivities,
   WeMakePeopleSmile, Outreach, SupportUs, LocateUs } from '../components/Homepage'


function Homepage() {
  return (
    <>
       <Navbar />
       <Header />
       <WeeklyActivities />
       <Events /> 
       <UpcomingActivities /> 
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