import parse from "html-react-parser";
import { useState } from "react";

function Task_datal_manual(props: any) {
  return (
    <div className="task_datal_manual_block">
      <div className="task_datal_manual">
        <div className="task_datal_title">
          {props.highlightText("Инструкция", props.searchText)}
        </div>
        <div className="task_datal_description">
          <pre className="manual_pre">
            {props.highlightText(
              `${props.learningTaskManual}`,
              props.searchText
            )}
          </pre>
        </div>
      </div>
    </div>
  );
}

export default Task_datal_manual;
