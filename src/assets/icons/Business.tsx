import { useToken } from "../../theme/config-theme";

const Business = () => {
  const { token } = useToken();
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24 20C28.4183 20 32 16.4183 32 12C32 7.58172 28.4183 4 24 4C19.5817 4 16 7.58172 16 12C16 16.4183 19.5817 20 24 20Z"
        fill={token.colorText}
        stroke={token.colorText}
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M42 44C42 34.059 33.941 26 24 26C14.059 26 6 34.059 6 44"
        stroke={token.colorText}
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M24 44L28 39L24 26L20 39L24 44Z"
        fill={token.colorText}
        stroke={token.colorText}
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Business;
