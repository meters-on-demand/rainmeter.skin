import React from "react";

import logo from "../assets/mond.svg";
import { Avatar, Box, Dropdown, Menu, MenuButton, MenuItem } from "@mui/joy";

import bg from "../helpers/bg.js";

export default function Navigation(props) {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 99999,
        ...bg,
      }}
    >
      <Dropdown>
        <MenuButton sx={{ ...bg, p: 0 }} variant="plain">
          <Avatar
            src={logo}
            sx={{
              "--Avatar-size": "64px",
            }}
            variant="plain"
          />
        </MenuButton>
        <Menu>
          <MenuItem></MenuItem>
        </Menu>
      </Dropdown>
    </Box>
  );
}
