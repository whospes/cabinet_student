import Arrow_bottom from "../icon/Arrow_bottom";
import Arrow_top from "../icon/Arrow_top";

function List_course_event(props: any) {
  const handleClick = () => {
    props.fetchCourses();
  };
  return (
    <div className="list_course_event">
      <div className="list_course_block">
        <div className="name_programm">Курсы</div>
        <div className="arrow_bottom" onClick={handleClick}>
          {!props.viewCourse && <Arrow_bottom />}
          {props.viewCourse && <Arrow_top />}
        </div>
      </div>
    </div>
  );
}

export default List_course_event;
