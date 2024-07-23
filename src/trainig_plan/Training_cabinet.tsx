import List_programm_event from "./List_programm_event";
import Training_programm from "./Training_programm";
import Training_title from "./Training_title";
import List_course_event from "./List_course_event";
import Training_complited_course from "./Training_complited_course";
import Training_preload from "./Training_preload";

function Training_cabinet(props: any) {
  const trainingCourseBlockClass = props.viewCourse
    ? "training_course_block preload_padding"
    : "training_course_block";

  return (
    <div className="training_cabinet">
      <Training_title
        searchView={props.searchView}
        setSearchView={props.setSearchView}
        searchText={props.searchText}
        setSearchText={props.setSearchText}
        handleSearch={props.handleSearch}
        searchResults={props.searchResults}
        highlightText={props.highlightText}
        setViewNotification={props.setViewNotification}
        viewNotification={props.viewNotification}
      />
      <List_programm_event
        viewEvent={props.viewEvent}
        setViewEvent={props.setViewEvent}
        fetchEvents={props.fetchEvents}
      />

      {props.viewEvent && (
        <Training_programm
          events={props.events}
          eventsResult={props.eventsResult}
          preloadCard={props.preloadCard}
          searchText={props.searchText}
          highlightText={props.highlightText}
        />
      )}
      <List_course_event
        viewCourse={props.viewCourse}
        setViewCourse={props.setViewCourse}
        fetchCourses={props.fetchCourses}
      />
      <div className={trainingCourseBlockClass}>
        {props.viewCourse
          ? props.preloadingCourse
            ? props.complitedCourse.map((element: any) => (
                <Training_complited_course
                  key={element.complitedCoursId}
                  complitedCoursId={element.complitedCoursId}
                  complitedCourseName={element.complitedCourseName}
                />
              ))
            : Array.from({ length: 6 }).map((_, index) => (
                <Training_preload key={index} />
              ))
          : null}
      </div>
    </div>
  );
}

export default Training_cabinet;
