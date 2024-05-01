import React from "react";

interface IProps {
  color: string;
  style: React.CSSProperties | undefined;
}

const Phone: React.FC<IProps> = (props) => {
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
        d="M15.0278 21.6835C17.0278 25.614 20.25 28.8223 24.1806 30.8362L27.2361 27.7807C27.6111 27.4057 28.1667 27.2807 28.6528 27.4473C30.2083 27.9612 31.8889 28.239 33.6111 28.239C34.375 28.239 35 28.864 35 29.6279V34.4751C35 35.239 34.375 35.864 33.6111 35.864C20.5694 35.864 10 25.2946 10 12.2529C10 11.489 10.625 10.864 11.3889 10.864H16.25C17.0139 10.864 17.6389 11.489 17.6389 12.2529C17.6389 13.989 17.9167 15.6557 18.4306 17.2112C18.5833 17.6973 18.4722 18.239 18.0833 18.6279L15.0278 21.6835Z"
        fill={props.color}
      />
    </svg>
  );
};

export default Phone;
