import React from "react";

interface IProps {
  color: string;
  style: React.CSSProperties | undefined;
}

const Gmail: React.FC<IProps> = (props) => {
  return (
    <svg
      width="45"
      height="46"
      viewBox="0 0 45 46"
      fill="none"
      style={props.style}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M34 32.864H31V19.739L22 25.364L13 19.739V32.864H10V14.864H11.8L22 21.239L32.2 14.864H34M34 11.864H10C8.335 11.864 7 13.199 7 14.864V32.864C7 33.6597 7.31607 34.4227 7.87868 34.9853C8.44129 35.5479 9.20435 35.864 10 35.864H34C34.7956 35.864 35.5587 35.5479 36.1213 34.9853C36.6839 34.4227 37 33.6597 37 32.864V14.864C37 14.0684 36.6839 13.3053 36.1213 12.7427C35.5587 12.1801 34.7956 11.864 34 11.864Z"
        fill={props.color}
      />
    </svg>
  );
};

export default Gmail;
