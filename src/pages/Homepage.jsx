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
import useLocomotiveScroll from "../hooks/useLocomotiveScroll";

function Homepage() {
  useLocomotiveScroll(true);

  return (
    <>
      <Navbar />
      <Header isMainheader={true} />
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
