import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Circular_complited_course(props: any) {
  const percentage = props.totalCount;
  return (
    <div className="circular_complited">
      <CircularProgressbar
        value={percentage}
        // text={`${percentage}%`}
        styles={buildStyles({
          // Colors
          pathColor: `rgba(0, 145, 213, ${percentage / 100})`,
          textColor: "#f88",
          trailColor: "#ffffff",
          backgroundColor: "#0091D5",
        })}
      />
    </div>
  );
}

export default Circular_complited_course;
