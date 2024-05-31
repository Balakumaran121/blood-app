import { create } from "zustand";
interface IBook {
  amount: number;
  author: string;
  updateAmount: (newAmount: number) => void;
}
export const useBookStore = create<IBook>((set) => ({
  amount: 50,
  author: "Bala",
  updateAmount: (newAmount: number) => {
    set({ amount: newAmount });
  },
}));
