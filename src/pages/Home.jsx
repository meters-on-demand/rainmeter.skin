import React from "react";
import { useRecoilValue } from "recoil";
import { skinsState } from "../state";

import logo from "../assets/mond.svg"

export function Component() {
  const skins = useRecoilValue(skinsState);

  return (
    <div>
      <img src={logo} />
      <h1>Hello, World!</h1>
      <p>There are {skins.length} skins!</p>
    </div>
  );
}
