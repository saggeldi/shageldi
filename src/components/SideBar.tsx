import { Box } from "@mui/material";
import DirectoryTreeView from "./FolderView";

const SideBar = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#2B2D30",
        minHeight: "calc(100vh-45px)",
        width: "400px",
        overflow: "scroll",
        marginTop: "45px",
      }}
    >
      <DirectoryTreeView />
    </Box>
  );
};

export default SideBar;
