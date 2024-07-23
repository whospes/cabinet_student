import Course_card_preload from "../courses/Course_card_preload";
import Type_courses_icon_a from "../icon/Type_courses_icon_a";
import Type_courses_icon_b from "../icon/Type_courses_icon_b";
import Tasks_card from "./Tasks_card";
import Tasks_card_horizontal from "./Tasks_card_horizontal";

function Tasks_info(props: any) {
  return (
    <div className="tasks_info">
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
      <div className="tasks_cards">
        {props.typeCourse &&
          props.preloadCard &&
          props.tasks.map((element: any) => (
            <Tasks_card
              TaskDatalName={element.TaskDatalName}
              TaskStatus={element.TaskStatus}
              TaskResourseId={element.TaskResourseId}
              highlightText={props.highlightText}
              setSearchText={props.setSearchText}
              searchText={props.searchText}
              Id={element.Id}
            />
          ))}
        {!props.preloadCard &&
          Array.from({ length: 6 }).map((_, index) => (
            <Course_card_preload key={index} />
          ))}
        {!props.typeCourse &&
          props.preloadCard &&
          props.tasks.map((element: any) => (
            <Tasks_card_horizontal
              TaskDatalName={element.TaskDatalName}
              TaskStatus={element.TaskStatus}
              highlightText={props.highlightText}
              searchText={props.searchText}
              Id={element.Id}
            />
          ))}
        {!props.typeCourse &&
          !props.preloadCard &&
          Array.from({ length: 6 }).map((_, index) => (
            <Tasks_card_horizontal key={index} />
          ))}
      </div>
    </div>
  );
}

export default Tasks_info;
