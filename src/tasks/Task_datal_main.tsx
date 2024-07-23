import { useState } from "react";
import Sending_task from "./Sending_task";
import Task_datal_description from "./Task_datal_description";
import Task_datal_manual from "./Task_datal_manual";
import Task_datal_name from "./Task_datal_name";
import Task_datal_target from "./Task_datal_target";
import Tasks_title from "./Tasks_title";

function Task_datal_main(props: any) {
  const [text, setText] = useState("");
  return (
    <div className="Task_datal_main">
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
      <Task_datal_name
        learningTaskName={props.learningTaskName}
        setSearchText={props.setSearchText}
        searchText={props.searchText}
        highlightText={props.highlightText}
      />

      {props.learningTaskTarget && (
        <Task_datal_target
          learningTaskTarget={props.learningTaskTarget}
          setSearchText={props.setSearchText}
          searchText={props.searchText}
          highlightText={props.highlightText}
        />
      )}
      {props.learningTask && (
        <Task_datal_description
          learningTask={props.learningTask}
          setSearchText={props.setSearchText}
          searchText={props.searchText}
          highlightText={props.highlightText}
        />
      )}

      {props.learningTaskManual && (
        <Task_datal_manual
          learningTaskManual={props.learningTaskManual}
          setSearchText={props.setSearchText}
          searchText={props.searchText}
          highlightText={props.highlightText}
        />
      )}

      <Sending_task
        text={text}
        setText={setText}
        Id={props.Id}
        learningAnswer={props.learningAnswer}
      />
    </div>
  );
}

export default Task_datal_main;
