import React from "react";
import Title_cabinet from "./Title_cabinet";
import Continue_block from "./Continue_block";
import Statistic_block from "./Statistic_block";

function Main_block_cabinet(props: any) {
  return (
    <div className="main_block_cabinet">
      <Title_cabinet
        positionInf={props.positionInf}
        dataStudent={props.dataStudent}
        dataStudentEnd={props.dataStudentEnd}
        searchView={props.searchView}
        setSearchView={props.setSearchView}
        searchText={props.searchText}
        setSearchText={props.setSearchText}
        searchResults={props.searchResults}
        handleSearch={props.handleSearch}
        highlightText={props.highlightText} // Передаем функцию подсветки в компонент Title_cabinet
      />
      <Continue_block
        userName={props.userName}
        lastId={props.lastId}
        countCourse={props.countCourse}
        highlightText={props.highlightText} // Передаем функцию подсветки в компонент Continue_block
        searchText={props.searchText}
      />
      <Statistic_block
        countCourse={props.countCourse}
        countCompletedCourse={props.countCompletedCourse}
        highlightText={props.highlightText} // Передаем функцию подсветки в компонент Statistic_block
        searchText={props.searchText}
      />
    </div>
  );
}

export default Main_block_cabinet;
