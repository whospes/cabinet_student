import { Link } from "react-router-dom";
import Arrow_datal_card from "./Arrow_datal_card";

function Task_datal_name(props: any) {
  return (
    <div className="task_datal_block">
      <Link to={"/_wt/tasks_student"}>
        <Arrow_datal_card />
      </Link>
      <div className="task_datal_name">
        {props.highlightText(`${props.learningTaskName}`, props.searchText)}
      </div>
    </div>
  );
}

export default Task_datal_name;
