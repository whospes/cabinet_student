import { Route, Routes } from "react-router-dom";
import "./App.css";

import Cabinet_students from "./main/Cabinet_students";
import Menu_student from "./main/Menu_student";
import Courses_student from "./courses/Courses_student";

function App() {
  return (
    <div className="App">
      <div className="main_layout">
        <Menu_student />
        <div className="content_area">
          <Routes>
            <Route
              path="/_wt/cabinet_student"
              element={<Cabinet_students />}
            ></Route>
            <Route
              path="/_wt/courses_student"
              element={<Courses_student />}
            ></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
