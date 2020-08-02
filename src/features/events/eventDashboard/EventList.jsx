import React from "react";
import EventListItem from "./EventListItem";

function EventList({events}) {
  return (
    <React.Fragment>
      {events.map((event) => (
        <EventListItem key={event.id} event={event} />
      ))}
    </React.Fragment>
  );
}

export default EventList;
