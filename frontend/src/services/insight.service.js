import api from "./api";

export const insightService = {
  getAll: () => api.get("/insight"),
};
