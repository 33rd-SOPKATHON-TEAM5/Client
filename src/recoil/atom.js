// 전역상태 정의

import { atom } from "recoil";

export const userIdState = atom({
  key: "userIdState",
  default: 0,
});

export const userNicknameState = atom({
  key: "userNicknameState",
  default: "",
});
