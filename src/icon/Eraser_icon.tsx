function Eraser_icon(props: any) {
  return (
    <svg
      onClick={props.handleEraseClick}
      id={!props.textAreaDisabled ? "eraser_icon" : "disabled-icon"}
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
    >
      <path
        d="M19.3375 16.8H12.6875L13.825 16.0125L19.95 11.4625C20.3 11.2 20.3875 10.5875 20.125 10.2375L14.525 2.80004C14.2625 2.45004 13.65 2.36254 13.3 2.62504L5.60004 8.31254L1.05004 11.725C0.700041 11.9875 0.612541 12.6 0.875041 12.95L4.81254 18.2C4.98754 18.4625 5.25004 18.55 5.51254 18.55H10.15H19.25C19.775 18.55 20.125 18.2 20.125 17.675C20.125 17.15 19.775 16.8 19.3375 16.8ZM9.88754 16.8H5.95004L2.80004 12.6L5.86254 10.325L10.5875 16.1875L9.88754 16.8ZM7.26254 9.27504L13.65 4.46254L18.2 10.5L12.8625 14.525L12.075 15.05L7.26254 9.27504Z"
        fill="#171717"
      />
    </svg>
  );
}

export default Eraser_icon;