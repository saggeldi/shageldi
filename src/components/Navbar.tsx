import { Box, Button, Stack } from "@mui/material";
import React from "react";

const Navbar = () => {
  const MenuBarButton = (props: { text: string }) => {
    return (
      <Button
        variant="text"
        sx={{
          color: "white",
          fontSize: "12px",
          padding: "2",
          textTransform: "none",
        }}
      >
        {props.text}
      </Button>
    );
  };

  return (
    <Box
      sx={{
        backgroundColor: "#303030",
        minWidth: "100%",
        padding: "6px",
        position: "fixed",
        top: "0",
        zIndex: "10",
      }}
    >
      <Stack direction={"row"} spacing={1} alignItems={"center"}>
        <img
          src="/logo.png"
          style={{
            width: "25px",
            height: "25px",
          }}
        />
        <MenuBarButton text="File" />
        <MenuBarButton text="Edit" />
        <MenuBarButton text="Tools" />
      </Stack>
    </Box>
  );
};

export default Navbar;
