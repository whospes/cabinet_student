import React, { forwardRef } from "react";

const Search_cabinet_student = forwardRef<HTMLDivElement, any>((props, ref) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.setSearchText(event.target.value);
  };

  return (
    <div className="search_student" ref={ref}>
      <input
        className="search_student_input"
        type="text"
        value={props.searchText}
        onChange={handleInputChange}
        ref={props.inputRef}
      />
    </div>
  );
});

export default Search_cabinet_student;
