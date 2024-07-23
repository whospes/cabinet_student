function Type_courses_icon_b(props: any) {
  return (
    <div className="type_courses_icon">
      <svg
        onClick={() => {
          props.setTypeCourse(false);
        }}
        id={
          !props.typeCourse
            ? "type_courses_icon_b_active"
            : "type_courses_icon_b"
        }
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
      >
        <rect
          x="0.25"
          y="0.25"
          width="21.5"
          height="21.5"
          rx="2.75"
          fill="#EFEFF1"
        />
        <rect
          x="0.25"
          y="0.25"
          width="21.5"
          height="21.5"
          rx="2.75"
          stroke="#666666"
          stroke-width="0.5"
        />
        <path
          d="M5.59998 7.59998H16.8"
          stroke="#666666"
          stroke-width="1.4"
          stroke-linecap="round"
        />
        <path
          d="M5.59998 11.2H16.8"
          stroke="#666666"
          stroke-width="1.4"
          stroke-linecap="round"
        />
        <path
          d="M5.59998 14.8H16.8"
          stroke="#666666"
          stroke-width="1.4"
          stroke-linecap="round"
        />
      </svg>
    </div>
  );
}

export default Type_courses_icon_b;
