import Title_cabinet from "../main/Title_cabinet";
import Courses_info from "./Courses_info";
import Title_universal from "./Title_universal";

function Courses_cabinet(props: any) {
  return (
    <div className="courses_cabinet">
      <Title_universal
        searchView={props.searchView}
        setSearchView={props.setSearchView}
        searchText={props.searchText}
        setSearchText={props.setSearchText}
        handleSearch={props.handleSearch}
        searchResults={props.searchResults}
      />
      <Courses_info
        typeCourse={props.typeCourse}
        setTypeCourse={props.setTypeCourse}
        courses={props.courses}
        setCourses={props.setCourses}
      />
    </div>
  );
}

export default Courses_cabinet;
