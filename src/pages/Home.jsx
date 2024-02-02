import React from "react";
import { useRecoilValue } from "recoil";
import { skinsState } from "../state";

import { Sheet, Grid } from "@mui/joy";

import Skin from "../components/Skin.jsx";

export function Component() {
  const skins = useRecoilValue(skinsState);
  return (
    <Sheet
      className="flex-1 grid"
      sx={{
        p: 8,
        gap: 6,
        gridTemplateColumns: "repeat(auto-fill, minmax(20rem, 1fr))",
      }}
    >
      {skins.map((skin, i) => (
        <Sheet className="w-full">
          <Skin key={i} {...skin} />
        </Sheet>
      ))}
    </Sheet>
  );
}
