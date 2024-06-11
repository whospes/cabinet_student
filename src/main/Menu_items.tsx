import Calendar_icon from "../icon/Calendar_icon";
import Courses_icon from "../icon/Courses_icon";
import Home_icon from "../icon/Home_icon";
import Tasks_icon from "../icon/Tasks_icon";
import Learning_icon from "../icon/Tasks_icon";
import Training_plan_icon from "../icon/Training_plan_icon";

function Menu_items() {
  return (
    <>
      <a href="/_wt/cabinet_student">
        <div className="menu_items">
          <Home_icon />

          <div className="text_menu">Главная</div>
        </div>
      </a>
      <a href="/_wt/courses_student">
        <div className="menu_items">
          <Courses_icon />

          <div className="text_menu">Курсы</div>
        </div>
      </a>
      <div className="menu_items">
        <Tasks_icon />
        <div className="text_menu">Задания</div>
      </div>
      <div className="menu_items">
        <Calendar_icon />
        <div className="text_menu">Календарь</div>
      </div>
      <div className="menu_items">
        <Training_plan_icon />
        <div className="text_menu">План обучения</div>
      </div>
      <div className="menu_items" id="mentor_block">
        <img
          className="img_mentor"
          src="/person_icon.html?id=5997256899460802155&type=20x20"
        ></img>
        <div className="text_menu">Наставник</div>
      </div>
      <div className="menu_items">
        <img
          className="img_mentor"
          src="/person_icon.html?id=5997256899460802155&type=20x20"
        ></img>
        <div className="text_menu">Тренер</div>
      </div>
    </>
  );
}

export default Menu_items;
