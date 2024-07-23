import React, { useState } from "react";
import Calendar_title from "./Calendar_title";
import { Value } from "react-calendar/dist/cjs/shared/types";
import Calendar from "react-calendar";
import Calendar_nextLabel from "../icon/Calendar_nextLabel";
import Calendar_prevLabel from "../icon/Calendar_prevLabel";
import Computer_icon from "../icon/Computer_icon";
import Book_icon from "../icon/Book_icon";
import { format } from "date-fns";
import Calendar_preload from "./Calendar_preload";

function Calendar_cabinet(props: any) {
  const [value, onChange] = useState<Value>(new Date());

  // Обработчик tileContent для добавления иконки
  const tileContent = ({ date, view }: { date: Date; view: string }) => {
    if (view === "month") {
      const formattedDate = format(date, "yyyy-MM-dd");

      const event = props.events.find(
        (event: any) =>
          format(new Date(event.dataEvent), "yyyy-MM-dd") === formattedDate
      );

      // Сначала проверяем состояние загрузки
      if (!props.preloadCard) {
        return (
          <div className="event-icon">
            <Calendar_preload />
          </div>
        );
      }

      // Затем проверяем наличие события и флага isAssist
      if (event && !event.isAssist) {
        return (
          <div className="event-icon">
            {event.micro === "false" ? (
              <Computer_icon event={event} />
            ) : (
              <Book_icon event={event} />
            )}
          </div>
        );
      }
    }
    return null;
  };

  return (
    <div className="calendar_cabinet">
      <Calendar_title
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

      <div className="calendar_block">
        <div className="calendar_text_time">
          {props.highlightText(
            "Все события отображаются по московскому времени",
            props.searchText
          )}
        </div>
        <Calendar
          onChange={onChange}
          value={value}
          prev2Label={null}
          next2Label={null}
          nextLabel={<Calendar_nextLabel />}
          prevLabel={<Calendar_prevLabel />}
          tileContent={tileContent}
        />
      </div>
    </div>
  );
}

export default Calendar_cabinet;
