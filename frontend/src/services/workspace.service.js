import api from "./api";

export const workspaceService = {
  getAll: () => api.get("/workspace"),
  create: (data) => api.post("/workspace", data),
  delete: (id) => api.delete(`/workspace/${id}`),
};
