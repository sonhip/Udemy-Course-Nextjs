import EventItem, { EventItemProps } from "./event-item";
import classes from "./event-list.module.css";

interface propsI {
  list: EventItemProps[];
}
function EventList(props: propsI) {
  const { list } = props;
  return (
    <ul className={classes.list}>
      {list.map((event) => (
        <EventItem
          key={event.id}
          id={event.id}
          location={event.location}
          image={event.image}
          date={event.date}
          title={event.title}
          description={event.description}
          isFeatured={event.isFeatured}
        />
      ))}
    </ul>
  );
}

export default EventList;
