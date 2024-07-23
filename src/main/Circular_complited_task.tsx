import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Circular_complited_task(props: any) {
  const percentage = props.totalTaskCount;
  return (
    <div className="circular_complited">
      <CircularProgressbar
        value={percentage}
        // text={`${percentage}%`}
        styles={buildStyles({
          // Colors
          pathColor: `rgba(255, 174, 0, ${percentage / 100})`,
          textColor: "#f88",
          trailColor: "#ffffff",
          backgroundColor: "#0091D5",
        })}
      />
    </div>
  );
}

export default Circular_complited_task;
