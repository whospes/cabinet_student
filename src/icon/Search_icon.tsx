function Search_icon(props: any) {
  return (
    <svg
      id="search_icon"
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      onClick={props.handleOpenSearch}
    >
      <g opacity="0.6">
        <rect x="0.5" y="0.5" width="39" height="39" rx="5.5" fill="#E4E5E7" />
        <rect x="0.5" y="0.5" width="39" height="39" rx="5.5" stroke="black" />
        <path
          d="M23.1629 23.1759L27.5 27.5M25 18.75C25 22.2017 22.2017 25 18.75 25C15.2982 25 12.5 22.2017 12.5 18.75C12.5 15.2982 15.2982 12.5 18.75 12.5C22.2017 12.5 25 15.2982 25 18.75Z"
          stroke="black"
          stroke-width="1.66667"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </svg>
  );
}

export default Search_icon;
