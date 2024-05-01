import { useToken } from "../../theme/config-theme";

const Communication = () => {
  const { token } = useToken();
  return (
    <svg
      width="48"
      height="48"
      style={{ width: "48px", height: "48px" }}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_80_263"
        style={{
          maskType: "luminance",
        }}
        maskUnits="userSpaceOnUse"
        x="2"
        y="4"
        width="44"
        height="39"
      >
        <path
          d="M33 38H22V30H36V22H44V38H39L36 41L33 38Z"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 6H36V30H17L13 34L9 30H4V6Z"
          fill="white"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19 18H20M26 18H27M12 18H13"
          stroke="black"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </mask>
      <g mask="url(#mask0_80_263)">
        <path d="M0 0H48V48H0V0Z" fill={token.colorText} />
      </g>
    </svg>
  );
};

export default Communication;
