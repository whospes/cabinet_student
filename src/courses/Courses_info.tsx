import { useState } from "react";
import Type_courses_icon_a from "../icon/Type_courses_icon_a";
import Type_courses_icon_b from "../icon/Type_courses_icon_b";
import Courses_card from "./Courses_card";
import Course_card_preload from "./Course_card_preload";
import Course_card_horizontal from "./Course_card_horizontal";
import Course_card_horizontal_preload from "./Course_card_horizontal_preload";

function Courses_info(props: any) {
  return (
    <div className="courses_info">
      <div className="courses_type">
        <Type_courses_icon_a
          typeCourse={props.typeCourse}
          setTypeCourse={props.setTypeCourse}
        />
        <Type_courses_icon_b
          typeCourse={props.typeCourse}
          setTypeCourse={props.setTypeCourse}
        />
      </div>
      <div className="courses_cards">
        {props.typeCourse &&
          props.preloadCard &&
          props.courses.map((element: any) => (
            <Courses_card
              courseName={element.courseName}
              coursesStatus={element.coursesStatus}
              coursePic={element.coursePic}
              highlightText={props.highlightText}
              searchText={props.searchText}
              courseId={element.courseId}
            />
          ))}
        {!props.preloadCard &&
          Array.from({ length: 6 }).map((_, index) => (
            <Course_card_preload key={index} />
          ))}

        {!props.typeCourse &&
          props.preloadCard &&
          props.courses.map((element: any) => (
            <Course_card_horizontal
              courseName={element.courseName}
              coursesStatus={element.coursesStatus}
              highlightText={props.highlightText}
              searchText={props.searchText}
              courseId={element.courseId}
            />
          ))}
        {!props.typeCourse &&
          !props.preloadCard &&
          Array.from({ length: 6 }).map((_, index) => (
            <Course_card_horizontal_preload key={index} />
          ))}
      </div>
    </div>
  );
}

export default Courses_info;
