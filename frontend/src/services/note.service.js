import api from "./api";

export const noteService = {
  getAll: (params) => api.get("/note", { params }),
  create: (data) => api.post("/note", data),
};
