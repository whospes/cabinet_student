import Arrow_bottom from "../icon/Arrow_bottom";
import Arrow_top from "../icon/Arrow_top";

function List_programm_event(props: any) {
  const handleClick = () => {
    props.fetchEvents();
  };
  return (
    <div className="list_programm_event">
      <div className="list_programm_block">
        <div className="name_programm">Обучения</div>
        <div className="arrow_bottom" onClick={handleClick}>
          {!props.viewEvent && <Arrow_bottom />}
          {props.viewEvent && <Arrow_top />}
        </div>
      </div>
    </div>
  );
}

export default List_programm_event;
