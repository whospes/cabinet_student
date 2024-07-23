function Mentor_students(props: any) {
  return (
    <a href={`/_wt/${props.managerBossPersonId}`}>
      <div className="menu_items" id="mentor_block">
        <img
          className="img_mentor"
          src={`/person_icon.html?id=${props.managerBossPersonId}&type=20x20`}
        ></img>
        <div className="text_menu">Наставник</div>
      </div>
    </a>
  );
}

export default Mentor_students;
