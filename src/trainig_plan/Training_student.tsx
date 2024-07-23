import { useCallback, useEffect, useState } from "react";
import Training_cabinet from "./Training_cabinet";
import axios from "axios";

function Training_student(props: any) {
  const [searchView, setSearchView] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState<number[]>([]);
  const [events, setEvents] = useState([]);
  const [preloadCard, setPreloadCard] = useState(false);
  const [viewEvent, setViewEvent] = useState(false);
  const [requestMade, setRequestMade] = useState(false);
  const [complitedCourse, setComplitedCourse] = useState([]);
  const [preloadingCourse, setPreloadingCourse] = useState(false);
  const [viewCourse, setViewCourse] = useState(false);
  const [requestStatusCourse, setRequestStatusCourse] = useState(false);

  //   useEffect(() => {
  //     axios
  //       .get(
  //         "custom_web_template.html?object_code=cabinet_student_training_plan_courses_ajax"
  //       )
  //       .then((result) => {
  //         setComplitedCourse(result.data);
  //       })
  //       .catch((error) => console.log(error));
  //   }, []);

  const fetchCourses = useCallback(() => {
    if (!requestStatusCourse) {
      axios
        .get(
          "custom_web_template.html?object_code=cabinet_student_training_plan_courses_ajax"
        )
        .then((result) => {
          setComplitedCourse(result.data);
          setPreloadingCourse(true);
          setRequestStatusCourse(true);
        })
        .catch((error) => console.log(error));
    }
    setViewCourse(!viewCourse);
  }, [requestStatusCourse, viewCourse]);

  const fetchEvents = useCallback(() => {
    if (!requestMade) {
      axios
        .get(
          "custom_web_template.html?object_code=cabinet_student_training_plan_ajax"
        )
        .then((result) => {
          setEvents(result.data.events);
          setPreloadCard(true);
          setRequestMade(true);
        })
        .catch((error) => console.log(error));
    }
    setViewEvent(!viewEvent);
  }, [requestMade, viewEvent]);

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
    <Training_cabinet
      searchView={searchView}
      setSearchView={setSearchView}
      searchText={searchText}
      setSearchText={setSearchText}
      handleSearch={handleSearch}
      searchResults={searchResults}
      highlightText={highlightText}
      events={events}
      preloadCard={preloadCard}
      setViewNotification={props.setViewNotification}
      viewNotification={props.viewNotification}
      viewEvent={viewEvent}
      setViewEvent={setViewEvent}
      fetchEvents={fetchEvents}
      complitedCourse={complitedCourse}
      viewCourse={viewCourse}
      setViewCourse={setViewCourse}
      fetchCourses={fetchCourses}
      preloadingCourse={preloadingCourse}
    />
  );
}

export default Training_student;
