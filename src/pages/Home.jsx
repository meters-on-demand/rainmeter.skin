import React from "react";
import { useRecoilValue } from "recoil";
import { skinsState } from "../state";

export function Component() {
  const skins = useRecoilValue(skinsState);

  return (
    <div>
      <h1>Hello, World!</h1>
      <p>There are {skins.length} skins!</p>
    </div>
  );
}
