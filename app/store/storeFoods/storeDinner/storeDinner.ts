import { create } from "zustand";

export interface IFood {
  name: string;
  image: string;
  price: string;
}

interface IStoreDinner {
  dinner: IFood[];
  setDinner: (newDinner: IFood[] | undefined) => void;
}

export const useStoreDinner = create<IStoreDinner>((set) => ({
  dinner: [],
  setDinner: (newDinner) => set({ dinner: newDinner }),
}))