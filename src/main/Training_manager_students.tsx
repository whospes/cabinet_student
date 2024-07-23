function Training_manager_students(props: any) {
  return (
    <a href={`/_wt/${props.managerBossPersonId}`}>
      <div className="menu_items">
        <img
          className="img_mentor"
          src={`/person_icon.html?id=${props.managerBossPersonId}&type=20x20`}
        ></img>
        <div className="text_menu">Тренер</div>
      </div>
    </a>
  );
}

export default Training_manager_students;
