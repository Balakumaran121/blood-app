import { create } from "zustand";
interface UserBlood {
  bloodType: string;
  bloodGroup: string;
}
export const useBloodStore = create<UserBlood>(() => ({
  bloodGroup: "A",
  bloodType: "positive",
}));
