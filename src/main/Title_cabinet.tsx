import React, { useEffect, useRef } from "react";
import Search_cabinet_student from "./Search_cabinet_student";
import Reminder_icon from "../icon/Reminder_icon";
import Search_icon from "../icon/Search_icon";

function Title_cabinet(props: any) {
  const dataStudentBegin = `${props.dataStudent.split(" ")[0]} ${
    props.dataStudent.split(" ")[1]
  }`;

  const dataStudentEndFormatted = `${props.dataStudentEnd.split(" ")[0]} ${
    props.dataStudentEnd.split(" ")[1]
  }`;

  const searchRef = useRef<HTMLDivElement>(null);

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

  // Применяем функцию подсветки к начальной и конечной датам студента только при активном поиске
  const highlightedDataStudentBegin = props.highlightText(
    dataStudentBegin,
    props.searchView ? props.searchText : ""
  );
  const highlightedDataStudentEnd = props.highlightText(
    dataStudentEndFormatted,
    props.searchView ? props.searchText : ""
  );

  return (
    <div className="title_cabinet">
      <div className="left_tittle_block">
        {props.searchView ? (
          <Search_cabinet_student
            ref={searchRef}
            searchText={props.searchText}
            setSearchText={props.setSearchText}
          />
        ) : (
          <div className="title_position">{props.positionInf}</div>
        )}
        <div className="data_student">
          {highlightedDataStudentBegin} - {highlightedDataStudentEnd}
        </div>
      </div>
      <div className="right_tittle_block">
        {!props.searchView && (
          <Search_icon handleOpenSearch={handleOpenSearch} />
        )}
        <Reminder_icon />
      </div>
    </div>
  );
}

export default Title_cabinet;
