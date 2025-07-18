import { useQuery } from "@tanstack/react-query";
import type { User } from "@shared/schema";

export function useAuth() {
  const { data: user, isLoading, error } = useQuery<User>({
    queryKey: ['/api/users/me'],
    retry: false,
  });

  return {
    user,
    isLoading,
    isAuthenticated: !!user,
    error
  };
}
