import Courses_info from "./Courses_info";
import Title_Courses from "./Title_Courses";

function Courses_cabinet(props: any) {
  return (
    <div className="courses_cabinet">
      <Title_Courses
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
      <Courses_info
        typeCourse={props.typeCourse}
        setTypeCourse={props.setTypeCourse}
        courses={props.courses}
        setCourses={props.setCourses}
        highlightText={props.highlightText}
        searchText={props.searchText}
        preloadCard={props.preloadCard}
      />
    </div>
  );
}

export default Courses_cabinet;
