import { useQuery } from "@tanstack/react-query";
import { workspaceService } from "../services/workspace.service";

export function useWorkspaces() {
  return useQuery({
    queryKey: ["workspaces"],
    queryFn: workspaceService.getAll,
  });
}
