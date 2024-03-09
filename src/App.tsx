import { ConfigProvider } from "antd";
import { lightTheme } from "./theme/theme";
import Router from "./page/Router";

function App() {
  return (
    <ConfigProvider theme={lightTheme}>
      <Router />
    </ConfigProvider>
  );
}

export default App;
