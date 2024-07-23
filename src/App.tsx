import { Route, Routes } from "react-router-dom";
import "./App.css";
import { useState, useRef, useEffect } from "react";

import Cabinet_students from "./main/Cabinet_students";
import Menu_student from "./main/Menu_student";
import Courses_student from "./courses/Courses_student";
import Tasks_student from "./tasks/Tasks_student";
import Task_datal from "./tasks/Task_datal";
import Calendar_student from "./calendar/Calendar_student";
import Training_student from "./trainig_plan/Training_student";
import Notification_student from "./main/Notification_student";

function App() {
  const [viewNotification, setViewNotification] = useState(false);
  const notificationRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target as Node)
      ) {
        setViewNotification(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [notificationRef]);

  return (
    <div className="App">
      {viewNotification && (
        <div
          className="notification-overlay"
          onClick={() => setViewNotification(false)}
        >
          <div className="notification" ref={notificationRef}>
            <Notification_student />
          </div>
        </div>
      )}
      <div className="main_layout">
        <Menu_student />
        <div className="content_area">
          <Routes>
            <Route
              path="/_wt/cabinet_student"
              element={
                <Cabinet_students
                  setViewNotification={setViewNotification}
                  viewNotification={viewNotification}
                />
              }
            ></Route>
            <Route
              path="/_wt/courses_student"
              element={
                <Courses_student
                  setViewNotification={setViewNotification}
                  viewNotification={viewNotification}
                />
              }
            ></Route>
            <Route
              path="/_wt/tasks_student"
              element={
                <Tasks_student
                  setViewNotification={setViewNotification}
                  viewNotification={viewNotification}
                />
              }
            ></Route>
            <Route
              path="/_wt/task_student/:id"
              element={
                <Task_datal
                  setViewNotification={setViewNotification}
                  viewNotification={viewNotification}
                />
              }
            ></Route>
            <Route
              path="/_wt/calendar_student"
              element={
                <Calendar_student
                  setViewNotification={setViewNotification}
                  viewNotification={viewNotification}
                />
              }
            ></Route>
            <Route
              path="/_wt/trainig_plan_student"
              element={
                <Training_student
                  setViewNotification={setViewNotification}
                  viewNotification={viewNotification}
                />
              }
            ></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
