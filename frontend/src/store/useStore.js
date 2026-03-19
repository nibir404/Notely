import { create } from "zustand";

export const useStore = create((set) => ({
  workspaces: [],
  setWorkspaces: (workspaces) => set({ workspaces }),
}));
