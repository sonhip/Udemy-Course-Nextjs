import { useRouter } from "next/router";
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/event-search";
import { getAllEvents } from "../../dummy-data.";

function EventsPage() {
  const featuredEvents = getAllEvents();
  const route = useRouter();

  const findEventHandler = (year: string, month: string) => {
    const fullPath: string = `/events/${year}/${month}`;
    route.push(fullPath);
  };

  return (
    <>
      <EventsSearch onSearch={findEventHandler} />
      <EventList list={featuredEvents} />
    </>
  );
}

export default EventsPage;
