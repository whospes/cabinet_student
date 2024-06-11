import Type_courses_icon_a from "../icon/Type_courses_icon_a";
import Type_courses_icon_b from "../icon/Type_courses_icon_b";
import Courses_card from "./Courses_card";

function Courses_info(props: any) {
  return (
    <div className="courses_info">
      <div className="courses_type">
        <Type_courses_icon_a typeCourse={props.typeCourse} />
        <Type_courses_icon_b />
      </div>
      <div className="courses_cards">
        {props.courses.map((element: any) => (
          <Courses_card
            courseName={element.courseName}
            coursesStatus={element.coursesStatus}
          />
        ))}
      </div>
    </div>
  );
}

export default Courses_info;
