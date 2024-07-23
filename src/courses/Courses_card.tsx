import Assigned_course_icon from "../icon/Assigned_course_icon";
import In_process_course_icon from "../icon/In_process_course_icon";
import Not_passed_icon from "../icon/Not_passed_icon";
import Passed_course_icon from "../icon/Passed_course_icon";

function Courses_card(props: any) {
  return (
    <a href={`/_wt/${props.courseId}`} id="link_course">
      <div className="Courses_card">
        <div className="title_courses_card">
          {props.highlightText("Курс", props.searchText)}
        </div>
        <div className="course_name">
          {props.highlightText(`${props.courseName}`, props.searchText)}
        </div>
        <div className="courses_info_student">
          <div className="course_status_block">
            <div className="course_status_img">
              {props.coursesStatus == "Назначен" && <Assigned_course_icon />}
              {props.coursesStatus == "В процессе" && (
                <In_process_course_icon />
              )}
              {props.coursesStatus == "Пройден" && <Passed_course_icon />}
              {props.coursesStatus == "Не пройден" && <Not_passed_icon />}
            </div>
            <div className="course_status_student">
              {props.highlightText(`${props.coursesStatus}`, props.searchText)}
            </div>
          </div>
          <div className="course_image">
            <img
              src={`https://eqvatoria.bistrodengi.ru/download_file.html?file_id=${props.coursePic}`}
              className="img_course_student"
              alt=""
            />
          </div>
        </div>
      </div>
    </a>
  );
}

export default Courses_card;
