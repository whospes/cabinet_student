import { useCallback, useEffect, useState } from "react";
import Tasks_cabinet from "./Tasks_cabinet";
import axios from "axios";

function Tasks_student(props: any) {
  const [searchView, setSearchView] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState<number[]>([]);
  const [typeCourse, setTypeCourse] = useState(true);
  const [tasks, setTasks] = useState([]);
  const [preloadCard, setPreloadCard] = useState(false);

  useEffect(() => {
    axios
      .get("custom_web_template.html?object_code=cabinet_student_tasks_ajax")
      .then((result) => {
        setTasks(result.data);
        setPreloadCard(true);
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

  // Функция для разделения текста на части и вставки тегов <span> вокруг совпадений
  const highlightText = (text: string, search: string) => {
    if (!search) {
      return text; // Если поиск не активен, возвращаем исходный текст без подсветки
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
    <Tasks_cabinet
      searchView={searchView}
      setSearchView={setSearchView}
      searchText={searchText}
      setSearchText={setSearchText}
      handleSearch={handleSearch}
      searchResults={searchResults}
      highlightText={highlightText}
      typeCourse={typeCourse}
      setTypeCourse={setTypeCourse}
      tasks={tasks}
      setTasks={setTasks}
      preloadCard={preloadCard}
      setPreloadCard={setPreloadCard}
      setViewNotification={props.setViewNotification}
      viewNotification={props.viewNotification}
    />
  );
}

export default Tasks_student;
