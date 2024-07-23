function Task_datal_target(props: any) {
  return (
    <div className="task_datal_target_block">
      <div className="task_datal_target">
        <div className="task_datal_title">
          {props.highlightText("Цель задания", props.searchText)}
        </div>
        <div className="task_datal_description">
          {props.highlightText(`${props.learningTaskTarget}`, props.searchText)}
        </div>
      </div>
    </div>
  );
}

export default Task_datal_target;
