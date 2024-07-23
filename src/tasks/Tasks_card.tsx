import { Link } from "react-router-dom";
import Assigned_course_icon from "../icon/Assigned_course_icon";
import In_process_course_icon from "../icon/In_process_course_icon";
import Not_passed_icon from "../icon/Not_passed_icon";
import Passed_course_icon from "../icon/Passed_course_icon";

function Tasks_card(props: any) {
  return (
    <Link to={`/_wt/task_student/${props.Id}`} key={props.Id}>
      <div className="task_card">
        <div className="title_tasks_card">
          {" "}
          {props.highlightText("Домашнее задание", props.searchText)}
        </div>
        <div className="tasks_name">
          {props.highlightText(`${props.TaskDatalName}`, props.searchText)}
        </div>
        <div className="tasks_info_student">
          <div className="tasks_status_block">
            <div className="tasks_status_img">
              {props.TaskStatus == "назначен" && <Assigned_course_icon />}
              {props.TaskStatus == "на проверке" && <In_process_course_icon />}
              {props.TaskStatus == "завершено" && <Passed_course_icon />}
              {props.TaskStatus == "внести правки" && <Not_passed_icon />}
            </div>
            <div className="tasks_status_student">
              {props.highlightText(`${props.TaskStatus}`, props.searchText)}
            </div>
          </div>
          <div className="tasks_image">
            <img
              src={`https://eqvatoria.bistrodengi.ru/download_file.html?file_id=${props.TaskResourseId}`}
              className="img_task_student"
              alt=""
            />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Tasks_card;
