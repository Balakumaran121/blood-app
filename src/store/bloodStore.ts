import { create } from "zustand";
import { UserBlood } from "../types";
export const useBloodStore = create<UserBlood>(() => ({
  bloodGroup: "A",
  bloodType: "positive",
}));
