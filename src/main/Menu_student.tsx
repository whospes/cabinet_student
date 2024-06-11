import Menu_items from "./Menu_items";
import Header_menu_icon from "../icon/Header_menu_icon";
import Home_icon from "../icon/Home_icon";

function Menu_student() {
  return (
    <div className="student_menu">
      <div className="header_student_menu">
        <div className="image_header_menu">
          <Header_menu_icon />
        </div>
        <div className="text_header_block">
          <div className="text_header_menu">Стажировка.</div>
          <div className="text_header_menu">Eqvanta</div>
        </div>
      </div>
      <div className="menu_items_all">
        <Menu_items />
      </div>
    </div>
  );
}

export default Menu_student;
