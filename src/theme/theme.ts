import { ThemeConfig, theme } from "antd";

const lightTheme: ThemeConfig = {
  algorithm: theme.defaultAlgorithm,
  token: {
    // Seed Token
    colorPrimary: "#2ED66E",
    // Alias Token
    colorBgBase: "#FFFFFF",
    colorBgLayout: "#E7EDFF",
  },
};

const darkTheme: ThemeConfig = {
  algorithm: theme.darkAlgorithm,
  token: {
    // Seed Token
    colorPrimary: "rgba(46, 214, 110, 1)",
    // Alias Token
    colorBgBase: "rgba(32, 33, 36, 1)",
    colorBgLayout: "rgba(32, 33, 36, 1)",
  },
};

export { lightTheme, darkTheme };
