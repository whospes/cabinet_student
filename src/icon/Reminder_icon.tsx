function Reminder_icon(props: any) {
  return (
    <svg
      onClick={() => {
        props.setViewNotification(!props.viewNotification);
      }}
      id="reminder_icon"
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
    >
      <g opacity="0.6">
        <rect x="0.5" y="0.5" width="39" height="39" rx="5.5" fill="#E4E5E7" />
        <rect x="0.5" y="0.5" width="39" height="39" rx="5.5" stroke="black" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M20.0867 12.5C17.6665 12.5 15.7954 14.33 15.7954 16.4787V18.5157C15.7954 18.7837 15.6852 19.0207 15.6278 19.1372C15.5532 19.2886 15.4556 19.4492 15.3516 19.6066C15.1419 19.9237 14.8613 20.2947 14.5624 20.6696C14.1788 21.1507 14.0971 21.7078 14.2193 22.1356C14.3354 22.542 14.6369 22.86 15.1513 22.9453C16.4484 23.1604 18.1068 23.3333 20.0867 23.3333C22.2126 23.3333 23.8374 23.134 25.0123 22.9002C25.4296 22.8172 25.671 22.565 25.7753 22.2388C25.8867 21.8903 25.8476 21.4174 25.5671 20.9672C25.4322 20.7509 25.2873 20.5298 25.1413 20.3082C25.1264 20.2855 25.1114 20.2628 25.0965 20.2401C24.9672 20.044 24.8371 19.8465 24.7211 19.6629C24.5932 19.4605 24.4689 19.2536 24.3744 19.0647C24.3006 18.917 24.1666 18.6352 24.1666 18.3333V16.4266C24.1666 14.2443 22.4721 12.5 20.0867 12.5ZM14.1287 16.4787C14.1287 13.3122 16.8464 10.8333 20.0867 10.8333C23.362 10.8333 25.8333 13.2936 25.8333 16.4266V18.2514C25.8403 18.2676 25.8505 18.2901 25.8651 18.3194C25.9215 18.4321 26.01 18.5826 26.1301 18.7728C26.2369 18.9418 26.3578 19.1252 26.4887 19.3239C26.5034 19.3462 26.5182 19.3687 26.5331 19.3913C26.679 19.6127 26.8344 19.8496 26.9816 20.0857C27.4975 20.9136 27.6362 21.8915 27.3627 22.7466C27.0821 23.6241 26.3754 24.3284 25.3376 24.5348C24.0513 24.7907 22.3174 25 20.0867 25C18.0096 25 16.2599 24.8186 14.8786 24.5895C13.6941 24.3931 12.8998 23.5842 12.6168 22.5934C12.3398 21.6239 12.5555 20.5132 13.2592 19.6306C13.5468 19.2698 13.7919 18.9436 13.9612 18.6874C14.043 18.5637 14.0972 18.4712 14.1287 18.4087V16.4787ZM14.1531 18.3541C14.1531 18.3541 14.1522 18.3576 14.1489 18.3654C14.1512 18.3581 14.1531 18.3541 14.1531 18.3541ZM23.1544 26.1507C23.4393 26.5121 23.3774 27.0361 23.016 27.321C21.315 28.6623 18.7026 28.6793 16.9833 27.3205C16.6222 27.0351 16.5608 26.511 16.8462 26.1499C17.1316 25.7888 17.6556 25.7275 18.0167 26.0128C19.1256 26.8892 20.8835 26.8801 21.984 26.0123C22.3454 25.7273 22.8694 25.7892 23.1544 26.1507Z"
          fill="black"
        />
      </g>
    </svg>
  );
}

export default Reminder_icon;
