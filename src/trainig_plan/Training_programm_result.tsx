function Training_programm_result(props: any) {
  return (
    <div className="trainig_programm_datal">
      <div className="training_programm_name">
        {props.highlightText(`${props.resultEventName}`, props.searchText)}
      </div>

      <div className="training_programm_status">
        {props.highlightText("Завершено", props.searchText)}
      </div>
    </div>
  );
}

export default Training_programm_result;
