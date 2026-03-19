import { useQuery } from "@tanstack/react-query";
import { noteService } from "../services/note.service";

export function useNotes(params) {
  return useQuery({
    queryKey: ["notes", params],
    queryFn: () => noteService.getAll(params),
  });
}
