import { useRouter } from "next/router";
import EventList from "../../components/events/event-list";
import { getFilteredEvents } from "../../dummy-data.";

function EventFilterPage() {
  const route = useRouter();
  const filterData: any = route.query.slug;

  if (!filterData) return <p className="center">Loading...</p>;

  const numYear = +filterData[0];
  const numMonth = +filterData[1];

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2031 ||
    numYear < 2021 ||
    numMonth > 12 ||
    numMonth < 1
  )
    return <p>Invalid filter! Please adjust your values!</p>;

  const filterEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filterEvents || filterEvents.length === 0)
    return <p>Event not found!</p>;

  return <EventList items={filterEvents} />;
}

export default EventFilterPage;
