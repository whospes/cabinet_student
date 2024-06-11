import React, { useEffect, useState, useCallback } from "react";
import "../App.css";
import Main_block_cabinet from "./Main_block_cabinet";
import axios from "axios";

function Cabinet_students() {
  const [userId, setUserid] = useState("");
  const [positionInf, setpositionInf] = useState("");
  const [userName, setUserName] = useState("");
  const [infoCourseCount, setInfoCourseCount] = useState([]);
  const [searchView, setSearchView] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState<number[]>([]);

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

  useEffect(() => {
    axios
      .get("custom_web_template.html?object_code=cabinet_student_ajax")
      .then((result) => {
        setInfoCourseCount(result.data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    const nameUser = document.getElementById("person_info") as HTMLInputElement;
    if (nameUser) {
      const name = nameUser.value.split(" ")[0];
      setUserName(name);
    }
    const positionUser = document.getElementById(
      "position_info"
    ) as HTMLInputElement;
    if (positionUser) {
      const position = positionUser.value;
      setpositionInf(position);
    }

    const idUserElement = document.getElementById(
      "id_user"
    ) as HTMLInputElement;
    if (idUserElement) {
      const BlockID = idUserElement.value;
      setUserid(BlockID);
    }
  }, []);

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
    <div className="App">
      <div className="cabinet_student">
        {infoCourseCount.map((courseelem: any) => (
          <Main_block_cabinet
            key={courseelem.id}
            userName={userName}
            positionInf={positionInf}
            infoCourseCount={infoCourseCount}
            countCourse={courseelem.countCourse}
            countCompletedCourse={courseelem.countCompletedCourse}
            lastId={courseelem.lastId}
            dataStudent={courseelem.dataStudent}
            dataStudentEnd={courseelem.dataStudentEnd}
            searchView={searchView}
            setSearchView={setSearchView}
            searchText={searchText}
            setSearchText={setSearchText}
            searchResults={searchResults}
            handleSearch={handleSearch}
            highlightText={highlightText}
          />
        ))}
      </div>
    </div>
  );
}

export default Cabinet_students;
