function Training_program_datal(props: any) {
  return (
    <div className="trainig_programm_datal">
      <div className="training_programm_name">
        {" "}
        {props.highlightText(`${props.nameEvent}`, props.searchText)}
      </div>

      <div className="training_programm_status">
        {props.isAssist
          ? props.highlightText("Завершено", props.searchText)
          : props.highlightText(`${props.dataEventModal}`, props.searchText)}
      </div>
    </div>
  );
}

export default Training_program_datal;
