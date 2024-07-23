import Tasks_info from "./Tasks_info";
import Tasks_title from "./Tasks_title";

function Tasks_cabinet(props: any) {
  return (
    <div className="tasks_cabinet">
      <Tasks_title
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

      <Tasks_info
        typeCourse={props.typeCourse}
        setTypeCourse={props.setTypeCourse}
        tasks={props.tasks}
        setTasks={props.setTasks}
        highlightText={props.highlightText}
        setSearchText={props.setSearchText}
        searchText={props.searchText}
        preloadCard={props.preloadCard}
        setPreloadCard={props.setPreloadCard}
      />
    </div>
  );
}

export default Tasks_cabinet;
