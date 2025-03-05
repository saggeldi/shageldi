import { ConfigProvider } from "antd";
import { darkTheme, lightTheme } from "./theme/theme";
import Router from "./page/Router";
import { useSelector } from "react-redux";
import { RootState } from "./features/store";

function App() {
  const theme = useSelector((state: RootState) => state.theme);

  return (
    <ConfigProvider theme={theme.value === "light" ? lightTheme : darkTheme}>
      <Router />
    </ConfigProvider>
  );
}

export default App;
