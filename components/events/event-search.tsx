import { useRef } from "react";
import Button from "../ui/button";
import classes from "./events-search.module.css";

interface EventsSearchProps {
  onSearch: (year:string, month: string) => void;
}
function EventsSearch(props:EventsSearchProps) {
  const {onSearch} = props;

  const yearInputRef:any = useRef(null);
  const monthInputRef:any = useRef(null);

  const handleSubmitForm = (event: any) => {
    event.preventDefault();
    const selectedYear = yearInputRef.current.value;
    const SelectedMonth = monthInputRef.current.value;

    onSearch(selectedYear, SelectedMonth);
  }
  return (
    <form onSubmit={handleSubmitForm} className={classes.form}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="year"></label>
          <select ref={yearInputRef} id="year">
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="month"></label>
          <select ref={monthInputRef} id="month">
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
      </div>
      <Button>Search Event</Button>
    </form>
  );
}

export default EventsSearch;
