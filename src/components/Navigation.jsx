import React from "react";

import logo from "../assets/package.svg";
import {
  Avatar,
  Box,
  Dropdown,
  Link,
  Menu,
  MenuButton,
  MenuItem,
} from "@mui/joy";

import bg from "../helpers/bg.js";

import { useColorScheme } from "@mui/joy/styles";
import Button from "@mui/joy/Button";
import { DarkMode, LightMode } from "@mui/icons-material";

function ModeToggle() {
  const { mode, setMode } = useColorScheme();
  return (
    <Button
      variant="plain"
      onClick={() => setMode(mode === "dark" ? "light" : "dark")}
    >
      {mode === "dark" ? <LightMode /> : <DarkMode />}
    </Button>
  );
}

export default function Navigation(props) {
  return (
    <>
      <Box sx={{ zIndex: 99999, ...bg }} className="absolute top-4 left-4">
        <Dropdown>
          <MenuButton sx={{ ...bg, p: 0 }} variant="plain">
            <Avatar src={logo} size="md" variant="plain" />
          </MenuButton>
          <Menu placement="bottom-start">
            <MenuItem>
              <Link href="https://github.com/meters-on-demand">
                Meters on Demand
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href="https://docs.rainmeter.skin">Wiki</Link>
            </MenuItem>
            <MenuItem>
              <Link href="https://rainmeter.net">Get Rainmeter</Link>
            </MenuItem>
          </Menu>
        </Dropdown>
      </Box>
      <Box sx={{ zIndex: 99999, ...bg }} className="absolute top-4 right-4">
        <ModeToggle />
      </Box>
    </>
  );
}
