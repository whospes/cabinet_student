import { useCallback, useEffect, useState } from "react";
import Calendar_cabinet from "./Calendar_cabinet";
import axios from "axios";

function Calendar_student(props: any) {
  const [searchView, setSearchView] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState<number[]>([]);
  const [events, setEvents] = useState([]);
  const [preloadCard, setPreloadCard] = useState(false);

  useEffect(() => {
    axios
      .get("custom_web_template.html?object_code=cabinet_student_calendar_ajax")
      .then((result) => {
        setPreloadCard(true);
        setEvents(result.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleSearch = useCallback((text: string) => {
    const contentArea = document.querySelector(".content_area") as HTMLElement;
    if (contentArea) {
      const contentText = contentArea.innerText;
      const regex = new RegExp(text, "gi");
      const matches = [...contentText.matchAll(regex)].map(
        (match) => match.index || 0
      );

      matches.forEach((index) => {
        const contextLength = 20;
        const contextStart = Math.max(index - contextLength, 0);
        const contextEnd = Math.min(
          index + text.length + contextLength,
          contentText.length
        );

        const context = contentText.substring(contextStart, contextEnd);
        if (context.includes(text)) {
          console.log("Word found:", text);
        } else {
          console.log("Word not found:", text);
        }
      });

      setSearchResults(matches);
    }
  }, []);

  useEffect(() => {
    console.log("Search results updated:", searchResults);
  }, [searchResults]);

  const highlightText = (text: string, search: string) => {
    if (!search) {
      return text;
    }
    const regex = new RegExp(`(${search})`, "gi");
    return text.split(regex).map((part, index) =>
      regex.test(part) ? (
        <span key={index} className="highlight">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <Calendar_cabinet
      searchView={searchView}
      setSearchView={setSearchView}
      searchText={searchText}
      setSearchText={setSearchText}
      handleSearch={handleSearch}
      searchResults={searchResults}
      highlightText={highlightText}
      events={events}
      preloadCard={preloadCard}
      setPreloadCard={setPreloadCard}
      setViewNotification={props.setViewNotification}
      viewNotification={props.viewNotification}
    />
  );
}

export default Calendar_student;
