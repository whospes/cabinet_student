import Assigned_course_icon from "../icon/Assigned_course_icon";
import In_process_course_icon from "../icon/In_process_course_icon";
import Passed_course_icon from "../icon/Passed_course_icon";

function Course_card_horizontal(props: any) {
  return (
    <a href={`/_wt/${props.courseId}`} id="link_course">
      <div className="course_card_horizontal">
        <div className="course_name_horizontal">
          {props.highlightText(`${props.courseName}`, props.searchText)}
        </div>
        <div className="course_status_block_horizontal">
          <div className="course_status_img">
            {props.coursesStatus == "Назначен" && <Assigned_course_icon />}
            {props.coursesStatus == "В процессе" && <In_process_course_icon />}
            {props.coursesStatus == "Пройден" && <Passed_course_icon />}
          </div>
          <div className="course_status_student">
            {props.highlightText(`${props.coursesStatus}`, props.searchText)}
          </div>
        </div>
      </div>
    </a>
  );
}

export default Course_card_horizontal;
