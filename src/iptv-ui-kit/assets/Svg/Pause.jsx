import React from "react";

function Pause(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M11 22H7V2h4v20zm6-20h-4v20h4V2z" />
    </svg>
  );
}

export default Pause;
