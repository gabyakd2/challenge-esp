import {create} from "zustand";

interface IStoreNav {
  anchorEl: null | HTMLElement;
  setAnchorEl: (el: HTMLElement | null) => void;
}

export const useStoreNav = create<IStoreNav>((set) => ({
  anchorEl: null,
  setAnchorEl: (el) => set({ anchorEl: el }),
}))