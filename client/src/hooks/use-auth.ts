import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import type { User } from "@shared/models/auth";

async function fetchUser(): Promise<User | null> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);
    
    const response = await fetch("/api/auth/user", {
      credentials: "include",
      signal: controller.signal,
    });
    
    clearTimeout(timeoutId);

    if (!response.ok) {
      return null;
    }

    const text = await response.text();
    if (!text || text.trim() === '') {
      return null;
    }
    
    try {
      return JSON.parse(text);
    } catch {
      return null;
    }
  } catch {
    return null;
  }
}

async function logout(): Promise<void> {
  window.location.href = "/api/logout";
}

export function useAuth() {
  const queryClient = useQueryClient();
  const { data: user, isLoading, error } = useQuery<User | null>({
    queryKey: ["/api/auth/user"],
    queryFn: fetchUser,
    retry: false,
    staleTime: 1000 * 60 * 5, // 5 minutes
    throwOnError: false,
  });

  const logoutMutation = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      queryClient.setQueryData(["/api/auth/user"], null);
    },
  });

  return {
    user: error ? null : user,
    isLoading,
    isAuthenticated: !!user && !error,
    logout: logoutMutation.mutate,
    isLoggingOut: logoutMutation.isPending,
  };
}
