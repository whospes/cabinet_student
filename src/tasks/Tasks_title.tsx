import { useEffect, useRef } from "react";
import Search_cabinet_student from "../main/Search_cabinet_student";
import Search_icon from "../icon/Search_icon";
import Reminder_icon from "../icon/Reminder_icon";

function Tasks_title(props: any) {
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (props.searchView && inputRef.current) {
      inputRef.current.focus();
    }
  }, [props.searchView]);

  useEffect(() => {
    const handler = (e: any) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        props.setSearchView(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [props.setSearchView]);

  const handleOpenSearch = () => {
    props.setSearchView(!props.searchView);
  };

  useEffect(() => {
    if (props.searchText) {
      props.handleSearch(props.searchText);
    }
  }, [props.searchText, props.handleSearch]);

  return (
    <div className="title_cabinet">
      <div className="left_tittle_block">
        {props.searchView ? (
          <Search_cabinet_student
            ref={searchRef}
            inputRef={inputRef}
            searchText={props.searchText}
            setSearchText={props.setSearchText}
          />
        ) : (
          <div className="title_position">Задания</div>
        )}
      </div>
      <div className="right_tittle_block">
        {!props.searchView && (
          <Search_icon handleOpenSearch={handleOpenSearch} />
        )}
        <Reminder_icon
          setViewNotification={props.setViewNotification}
          viewNotification={props.viewNotification}
        />
      </div>
    </div>
  );
}

export default Tasks_title;
