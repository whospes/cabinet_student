import { Link } from "react-router-dom";
import Assigned_course_icon from "../icon/Assigned_course_icon";
import In_process_course_icon from "../icon/In_process_course_icon";
import Not_passed_icon from "../icon/Not_passed_icon";
import Passed_course_icon from "../icon/Passed_course_icon";

function Tasks_card_horizontal(props: any) {
  return (
    <Link to={`/_wt/task_student/${props.Id}`} key={props.Id}>
      <div className="task_card_horizontal">
        <div className="task_name_horizontal">
          {props.highlightText(`${props.TaskDatalName}`, props.searchText)}
        </div>
        <div className="task_status_block_horizontal">
          <div className="task_status_img">
            {props.TaskStatus == "назначен" && <Assigned_course_icon />}
            {props.TaskStatus == "на проверке" && <In_process_course_icon />}
            {props.TaskStatus == "завершено" && <Passed_course_icon />}
            {props.TaskStatus == "внести правки" && <Not_passed_icon />}
          </div>
          <div className="task_status_student">
            {props.highlightText(`${props.TaskStatus}`, props.searchText)}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Tasks_card_horizontal;
