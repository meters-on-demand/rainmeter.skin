import { atom, selector } from "recoil";
import getSkins from "./helpers/api";

export const skinsState = atom({
  key: "skins",
  default: selector({
    key: "skins/query",
    get: async () => {
      return await getSkins();
    },
  }),
});
