import React, { useState } from "react";
import { Grid } from "semantic-ui-react";
import EventList from "./EventList";
import EventForm from "../eventFrom/EventForm";
import { sampleData } from "../../../app/api/sampleData";

function EventDashboard({formOpen, setFormOpen}) {
  const [events, setEvents] = useState(sampleData);

  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList events={events} />
      </Grid.Column>
      <Grid.Column width={6}>{formOpen && <EventForm setFormOpen={setFormOpen} />}</Grid.Column>
    </Grid>
  );
}

export default EventDashboard;
