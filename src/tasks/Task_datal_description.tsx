function Task_datal_description(props: any) {
  return (
    <div className="task_datal_description_block">
      <div className="task_description">
        <div className="task_datal_title">
          {props.highlightText("Задача", props.searchText)}
        </div>
        <div className="task_datal_description">
          {props.highlightText(`${props.learningTask}`, props.searchText)}
        </div>
      </div>
    </div>
  );
}

export default Task_datal_description;
