import Circular_complited_course from "./Circular_complited_course";
import Circular_complited_task from "./Circular_complited_task";

function Statistic_block(props: any) {
  let countActiveCourse = props.countCourse;
  let countCompeletedCourse = props.countCompletedCourse;

  let totalCount = 0;

  if (countActiveCourse != 0) {
    totalCount = Math.round(
      (100 / (countActiveCourse + countCompeletedCourse)) *
        countCompeletedCourse
    );
  } else {
    totalCount = 0;
  }

  let totalTaskCount = 0;

  if (props.countTasks != 0) {
    totalTaskCount = Math.round(
      (100 / (props.countTasks + props.contComplitedTask)) *
        props.contComplitedTask
    );
  } else {
    totalTaskCount = 0;
  }

  return (
    <div className="statistic_block">
      <div className="statistic_title">
        {props.highlightText("Статистика обучения", props.searchText)}
      </div>
      <div className="statistic_datal">
        <div className="statistic_courses">
          <div className="statistic_block_datal">
            <div className="statistic_number">
              {props.highlightText(`${props.countCourse}`, props.searchText)}
            </div>
            <div className="statistic_name">
              {" "}
              {props.highlightText("Курсов к изучению", props.searchText)}
            </div>
          </div>
        </div>
        <div className="statistic_learning">
          <div className="statistic_block_datal">
            <div className="statistic_chart">
              <div className="statistic_number">
                {props.highlightText(`${totalCount}%`, props.searchText)}
              </div>
              <Circular_complited_course totalCount={totalCount} />
            </div>
            <div className="statistic_name">
              {props.highlightText("Обучения завершено", props.searchText)}
            </div>
          </div>
        </div>
        <div className="statistic_tasks">
          <div className="statistic_block_datal">
            <div className="statistic_chart">
              <div className="statistic_number">
                {props.highlightText(`${totalTaskCount}%`, props.searchText)}
              </div>
              <Circular_complited_task totalTaskCount={totalTaskCount} />
            </div>
            <div className="statistic_name">
              {props.highlightText("Заданий сделано", props.searchText)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statistic_block;
