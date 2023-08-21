import React from "react";

interface IArrowProps {
  width: string;
  height: string;
  color: string;
}

export const ArrowIcon: React.FC<IArrowProps> = (props) => {
  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox="0 0 6 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.3962 4.48532C3.19605 4.74532 2.80395 4.74532 2.6038 4.48532L0.155585 1.305C-0.0975138 0.976212 0.136868 0.5 0.551788 0.5L5.44821 0.5C5.86313 0.5 6.09751 0.976213 5.84441 1.305L3.3962 4.48532Z"
        fill={props.color}
      />
    </svg>
  );
};

ArrowIcon.defaultProps = {
  width: "6",
  height: "6",
  color: "white",
};
