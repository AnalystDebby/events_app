import Link from "next/link";
import React from "react";

const EventsPerCityPage = () => {
  return (
    <div>
      <h1>Events in London</h1>
      <Link href="/events/single-event">Event 1 </Link>
      <Link href="/events/event2">Event 2 </Link>
      <Link href="/events/event3">Event 3 </Link>
      <Link href="/events/event4">Event 1 </Link>
    </div>
  );
};

export default EventsPerCityPage;
