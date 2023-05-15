import React from "react";
import { Navbar, Header, SocialMedia, Footer } from "../components/layout";
import {
  WeeklyActivities,
  Events,
  Departments,
  UpcomingActivities,
  Outreach,
  Developers,
  SupportUs,
  LocateUs,
} from "../components/Homepage";

function Homepage() {
  return (
    <>
      <Navbar />
      <Header />
      <WeeklyActivities />
      <Events />
      <UpcomingActivities />
      <Departments />
      <Outreach />
      <SupportUs />
      <LocateUs />
      <SocialMedia bgColor={"#edf3f7"} />
      <Developers />
      <Footer />
    </>
  );
}

export default Homepage;
