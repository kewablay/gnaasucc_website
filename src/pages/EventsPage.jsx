import React from "react";
import { Navbar, Header, SocialMedia, Footer } from "../components/layout";
import useLocomotiveScroll from "../hooks/useLocomotiveScroll";
import UpcomingEvent from "../components/eventspage/UpcomingEvent";
import AllEvents from "../components/eventspage/AllEvents";

import eventsBg from "../assets/images/events-bg.png";

function EventsPage() {
  useLocomotiveScroll(true);

  return (
    <div>
      <Navbar />
      <Header isMainHeader={false} page={"Events"} bgImage={eventsBg} />
      <UpcomingEvent />
      <AllEvents />
      <SocialMedia bgColor={"#FFF5E6"} />
      <Footer />
    </div>
  );
}

export default EventsPage;
