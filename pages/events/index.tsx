import EventList from "../../components/events/event-list";
import { getAllEvents } from "../../dummy-data.";

function EventsPage() {
  const featuredEvents = getAllEvents();
  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
}

export default EventsPage;
