import { useRouter } from "next/router";
import EventContent from "../../components/event-detail/event-content";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import { getEventById } from "../../dummy-data.";

function EventDetailPage() {
  const route = useRouter();
  const eventId = route.query.eventId;
  const event: any = getEventById(eventId);

  if (!eventId) return <p>No event found!</p>;

  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>{event.description}</EventContent>
    </>
  );
}

export default EventDetailPage;
