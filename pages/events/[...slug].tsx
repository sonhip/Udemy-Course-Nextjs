import EventList from "../../components/events/event-list";
import { getFilteredEvents } from "../api/helpers/utils-api";

function EventFilterPage(props: any) {
  const { hasError, filterEvents } = props;

  if (hasError) return <p>Invalid filter! Please adjust your values!</p>;

  if (!filterEvents || filterEvents.length === 0)
    return <p>Event not found!</p>;

  return <EventList list={filterEvents} />;
}
export async function getServerSideProps(context: any) {
  const { params } = context;
  const filterData = params.slug;

  const numYear = +filterData[0];
  const numMonth = +filterData[1];

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2031 ||
    numYear < 2021 ||
    numMonth > 12 ||
    numMonth < 1
  ) {
    return {
      props: { hasError: true },
      // notFound: true,
      // redirect: {
      //   destination: "/error"
      // }
    };
  }

  const filterEvents = await getFilteredEvents({
    year: numYear,
    month: numMonth,
  });
  return {
    props: {
      filterEvents: filterEvents,
    },
  };
}
export default EventFilterPage;
