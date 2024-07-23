import React from "react";
import Picture_continue_block from "./Picture_continue_block";

function Continue_block(props: any) {
  // Функция для подсветки текста

  return (
    <div className="continue_block">
      <div className="left_continue_block">
        <div className="continue_title">
          {" "}
          {props.highlightText(`${props.userName}, привет!`, props.searchText)}
        </div>
        <div className="continue_text">
          {/* Применяем функцию подсветки к тексту */}
          {props.highlightText(
            "Сегодня отличный день, чтобы узнать новое или закрепить знания на практике.",
            props.searchText
          )}
        </div>
        {props.countCourse > 0 && (
          <a href={`/_wt/courses_2022/${props.lastId}`} target="_blank">
            <button className="continue_button">Продолжить</button>
          </a>
        )}
      </div>
      <div className="right_continue_block">
        <Picture_continue_block />
      </div>
    </div>
  );
}

export default Continue_block;
