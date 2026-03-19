import { useQuery } from "@tanstack/react-query";
import { projectService } from "../services/project.service";

export function useProjects(workspaceId) {
  return useQuery({
    queryKey: ["projects", workspaceId],
    queryFn: () => projectService.getByWorkspace(workspaceId),
    enabled: !!workspaceId,
  });
}
