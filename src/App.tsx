import { ConfigProvider, Spin } from "antd";
import { darkTheme, lightTheme } from "./theme/theme";
import Router from "./page/Router";
import { useSelector } from "react-redux";
import { RootState } from "./features/store";
import { Suspense } from "react";
import styled from "styled-components";

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
`;

const LoadingSpinner = () => (
  <LoadingContainer>
    <Spin size="large" />
  </LoadingContainer>
);

function App() {
  const theme = useSelector((state: RootState) => state.theme);

  return (
    <ConfigProvider theme={theme.value === "light" ? lightTheme : darkTheme}>
      <Suspense fallback={<LoadingSpinner />}>
        <Router />
      </Suspense>
    </ConfigProvider>
  );
}

export default App;
