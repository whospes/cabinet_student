import { useCallback, useEffect, useState } from "react";
import Courses_cabinet from "./Courses_cabinet";
import axios from "axios";

function Courses_student() {
  const [searchView, setSearchView] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState<number[]>([]);
  const [typeCourse, setTypeCourse] = useState(true);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios
      .get("custom_web_template.html?object_code=cabinet_student_courses_ajax")
      .then((result) => {
        setCourses(result.data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    if (!searchView) {
      setSearchText("");
    }
  });

  const handleSearch = useCallback((text: string) => {
    const contentArea = document.querySelector(".content_area") as HTMLElement;
    if (contentArea) {
      const contentText = contentArea.innerText; // Текст внутри .content_area
      const regex = new RegExp(text, "gi");
      const matches = [...contentText.matchAll(regex)].map(
        (match) => match.index || 0
      );
      console.log("Matches found:", matches); // Лог для проверки найденных совпадений

      // Проверка совпадений
      matches.forEach((index) => {
        const contextLength = 20; // Количество символов до и после совпадения
        const contextStart = Math.max(index - contextLength, 0);
        const contextEnd = Math.min(
          index + text.length + contextLength,
          contentText.length
        );

        const context = contentText.substring(contextStart, contextEnd);
        console.log("Context:", context); // Лог контекста для проверки

        if (context.includes(text)) {
          console.log("Word found:", text); // Слово найдено верно
          // Дальнейшие действия при необходимости
        } else {
          console.log("Word not found:", text); // Слово не найдено
          // Дальнейшие действия при необходимости
        }
      });

      setSearchResults(matches);
    }
  }, []);

  useEffect(() => {
    console.log("Search results updated:", searchResults); // Лог для проверки обновления состояния searchResults
  }, [searchResults]);

  return (
    <Courses_cabinet
      searchView={searchView}
      setSearchView={setSearchView}
      searchText={searchText}
      setSearchText={setSearchText}
      handleSearch={handleSearch}
      searchResults={searchResults}
      typeCourse={typeCourse}
      setTypeCourse={setTypeCourse}
      courses={courses}
      setCourses={setCourses}
    />
  );
}

export default Courses_student;
