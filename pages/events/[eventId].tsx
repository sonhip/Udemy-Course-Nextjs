import { GetStaticProps } from "next";
import EventContent from "../../components/event-detail/event-content";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventSummary from "../../components/event-detail/event-summary";
import { getAllEvents, getEventById } from "../api/helpers/utils-api";
import { GetStaticPaths } from "next";

function EventDetailPage(props: any) {
  const { event } = props;

  // if (!eventId) return <p>No event found!</p>;

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

export const getStaticProps: GetStaticProps = async (ctx) => {
  console.log("ctx :>> ", ctx);
  const event = await getEventById(ctx.params?.eventId);
  return {
    props: {
      event: event,
    },
  };
};

export const getStaticPaths = async () => {
  const allEvents = await getAllEvents();

  const paths = allEvents.map((event) => ({
    params: {
      eventId: event.id,
    },
  }));
  return {
    paths: paths,
    fallback: false,
  };
};
export default EventDetailPage;
