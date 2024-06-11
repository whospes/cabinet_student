function Courses_card(props: any) {
  return (
    <div className="Courses_card">
      <div className="title_courses_card">Курс</div>
      <div className="course_name">{props.courseName}</div>
      <div className="courses_info_student">
        <div className="course_status_block">
          <div className="course_status_img">
            <img
              src="https://eqvatoria.bistrodengi.ru/download_file.html?file_id=7032246402374069870"
              className="img_status_student"
            ></img>
          </div>
          <div className="course_status_student">{props.coursesStatus}</div>
        </div>
        <div className="course_image">
          <img
            src="https://eqvatoria.bistrodengi.ru/download_file.html?file_id=7032251780189258584"
            className="img_course_student"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Courses_card;
