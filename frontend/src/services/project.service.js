import api from "./api";

export const projectService = {
  getByWorkspace: (workspaceId) => api.get(`/project?workspace=${workspaceId}`),
  create: (data) => api.post("/project", data),
};
