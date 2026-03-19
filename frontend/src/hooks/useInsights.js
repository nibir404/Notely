import { useQuery } from "@tanstack/react-query";
import { insightService } from "../services/insight.service";

export function useInsights() {
  return useQuery({
    queryKey: ["insights"],
    queryFn: insightService.getAll,
  });
}
