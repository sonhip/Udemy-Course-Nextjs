import { GetStaticProps } from "next";
import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "./api/helpers/utils-api";

function HomePage(props: any) {
  const { events } = props;
  return (
    <div>
      <EventList list={events} />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      events: featuredEvents,
    },
  };
};

export default HomePage;
