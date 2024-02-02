import Stack from "@mui/material/Stack";
import Hero from "./CodeView";
import SideBar from "./SideBar";
import { Box } from "@mui/material";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Emulator from "./Emulator";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Stack direction={"row"}>
        <SideBar />
        <Box
          sx={{
            backgroundColor: "#1E1F22",
            width: "60%",
            height: "100vh",
            overflow: "scroll",
          }}
        >
          <Hero code="fun cout('Shageldi') { }" language="kotlin" />
        </Box>
        <Box
          sx={{
            marginTop: "45px",
            padding: "22px",
            paddingRight: "50px",
            backgroundColor: "#2B2D30",
            overflow: "hidden",
          }}
        >
          <Emulator />
        </Box>
      </Stack>
      <Footer />
    </div>
  );
};

export default MainLayout;
