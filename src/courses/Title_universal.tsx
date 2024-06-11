import { useEffect, useRef } from "react";
import Search_cabinet_student from "../main/Search_cabinet_student";
import Reminder_icon from "../icon/Reminder_icon";
import Search_icon from "../icon/Search_icon";

function Title_universal(props: any) {
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
          <div className="title_position">Курсы</div>
        )}
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

export default Title_universal;
