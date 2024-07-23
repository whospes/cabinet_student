import axios from "axios";
import { useEffect, useRef, useState } from "react";
import Modal_task_sending from "./Modal_task_sending";
import Eraser_icon from "../icon/Eraser_icon";

function Sending_task(props: any) {
  const [textAreaDisabled, setTextAreaDisabled] = useState(false);
  const [textAreaValue, setTextAreaValue] = useState(
    props.learningAnswer || ""
  );
  const [isEditing, setIsEditing] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaValue(event.target.value);
    props.setText(event.target.value);
  };

  useEffect(() => {
    // Если есть текст при инициализации, блокируем поле ввода
    if (props.learningAnswer) {
      setTextAreaDisabled(true);
    }
  }, [props.learningAnswer]);

  const sendingAnswer = () => {
    axios
      .put(
        "custom_web_template.html?object_code=cabinet_student_sending_answer_ajax",
        {
          params: { lerning_task_id: props.Id, lerning_text: props.text },
        }
      )
      .then((response) => {
        // Проверка успешного ответа
        if (response.status === 200) {
          console.log("Response received:", response.data);
          setTextAreaDisabled(true); // Блокируем поле ввода после успешной отправки
          setShowModal(true);
          setTimeout(() => {
            setShowModal(false);
          }, 3000);
        } else {
          console.error("Failed to send data:", response);
        }
      })
      .catch((error) => console.error("Error sending data:", error));
  };

  const handleEditClick = () => {
    setTextAreaDisabled(false); // Разблокировать textarea для редактирования
    setIsEditing(true); // Включить подсветку или другие стили для редактирования

    setTimeout(() => {
      if (textAreaRef.current) {
        textAreaRef.current.focus(); // Установить фокус на textarea
        // Установить курсор в конец текста в textarea:
        textAreaRef.current.setSelectionRange(
          textAreaValue.length,
          textAreaValue.length
        );
      }
    }, 0);
  };

  const handleEraseClick = () => {
    setTextAreaValue("");
    props.setText("");
    if (textAreaRef.current) {
      textAreaRef.current.focus();
    }
  };

  return (
    <div className="sending_task_block">
      <div className="sending_task">
        <div className="task_datal_title">Отправка задания</div>
        <div className="task_datal_text_block">
          <div className="toolbar_text">
            <Eraser_icon
              handleEraseClick={handleEraseClick}
              textAreaDisabled={textAreaDisabled}
            />
            {/* <hr className="hr_textarea" /> */}
          </div>
          <textarea
            id="text_task"
            onChange={handleInputChange}
            disabled={textAreaDisabled}
            value={textAreaValue}
            ref={textAreaRef}
            className={isEditing ? "textarea-highlight" : ""}
            placeholder="Комментарий эксперту"
          />
        </div>
        <div className="buttons_panel">
          {textAreaDisabled && (
            <button className="button_task_edit" onClick={handleEditClick}>
              Редактировать
            </button>
          )}
          {!textAreaDisabled && (
            <button className="button_task_sending" onClick={sendingAnswer}>
              Отправить
            </button>
          )}
        </div>
        {showModal && <Modal_task_sending />}
      </div>
    </div>
  );
}

export default Sending_task;
