function Calendar_modal(props: any) {
  return (
    <div className="calendar_modal">
      <div className="event_modal_name">{props.nameEvent}</div>
      <div className="event_modal_data">{props.date}</div>
      <div className="time_event">
        <div className="time_start">
          {props.timeStart}-{props.timeEnd}
        </div>
      </div>
    </div>
  );
}

export default Calendar_modal;
