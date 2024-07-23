import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Calendar_icon from "../icon/Calendar_icon";
import Courses_icon from "../icon/Courses_icon";
import Home_icon from "../icon/Home_icon";
import Tasks_icon from "../icon/Tasks_icon";
import Training_plan_icon from "../icon/Training_plan_icon";
import axios from "axios";
import Mentor_students from "./Mentor_students";
import Training_manager_students from "./Training_manager_students";

function Menu_items() {
  const [mentorBossPersonId, setMentorBossPersonId] = useState(null);
  const [trainerBossPersonId, setTrainerBossPersonId] = useState(null);
  const location = useLocation();

  useEffect(() => {
    axios
      .get("custom_web_template.html?object_code=cabinet_student_teacher_ajax")
      .then((result) => {
        const data = result.data;
        console.log("Данные от сервера:", data); // Отладочный вывод данных
        const teachers = data.TeacherInfo || [];

        // Найдем объект с managerPosition равным "Наставник"
        const mentor = teachers.find(
          (teacher: any) => teacher.managerPosition === "Наставник"
        );

        if (mentor) {
          console.log("Найден наставник:", mentor); // Отладочный вывод наставника
          setMentorBossPersonId(mentor.managerBossPersonId);
        }

        // Найдем объект с managerPosition равным "Тренер"
        const trainer = teachers.find(
          (teacher: any) => teacher.managerPosition === "Тренер"
        );

        if (trainer) {
          console.log("Найден тренер:", trainer); // Отладочный вывод тренера
          setTrainerBossPersonId(trainer.managerBossPersonId);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Link to={"/_wt/cabinet_student"}>
        <div
          className={`menu_items ${
            location.pathname === "/_wt/cabinet_student" ? "active" : ""
          }`}
        >
          <Home_icon />
          <div className="text_menu">Главная</div>
        </div>
      </Link>
      <Link to={"/_wt/courses_student"}>
        <div
          className={`menu_items ${
            location.pathname === "/_wt/courses_student" ? "active" : ""
          }`}
        >
          <Courses_icon />
          <div className="text_menu">Курсы</div>
        </div>
      </Link>
      <Link to={"/_wt/tasks_student"}>
        <div
          className={`menu_items ${
            location.pathname === "/_wt/tasks_student" ? "active" : ""
          }`}
        >
          <Tasks_icon />
          <div className="text_menu">Задания</div>
        </div>
      </Link>
      <Link to={"/_wt/calendar_student"}>
        <div
          className={`menu_items ${
            location.pathname === "/_wt/calendar_student" ? "active" : ""
          }`}
        >
          <Calendar_icon />
          <div className="text_menu">Календарь</div>
        </div>
      </Link>
      <Link to={"/_wt/trainig_plan_student"}>
        <div
          className={`menu_items ${
            location.pathname === "/_wt/trainig_plan_student" ? "active" : ""
          }`}
        >
          <Training_plan_icon />
          <div className="text_menu">План обучения</div>
        </div>
      </Link>
      {mentorBossPersonId && (
        <Mentor_students managerBossPersonId={mentorBossPersonId} />
      )}
      {trainerBossPersonId && (
        <Training_manager_students managerBossPersonId={trainerBossPersonId} />
      )}
    </>
  );
}

export default Menu_items;
