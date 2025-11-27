"use client"
import { useEffect, useState } from "react";

type UserRole = "admin" | "editor" | "writer" | "viewer";

type User = {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: UserRole;
  status: "Active" | "Inactive" | "Pending";
  joined: string;
  lastActive: string;
}
// Mock user for demo purposes - in a real app, this would come from authentication
const MOCK_CURRENT_USER: User = {
  id: "current-user-123",
  name: "Admin User",
  email: "admin@example.com",
  avatar: "https://source.unsplash.com/random/200x200/?portrait=1",
  role: "admin",
  status: "Active",
  joined: "Jan 15, 2023",
  lastActive: "Just now",
};

export const useUser = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching user data
    const fetchUser = async () => {
      setIsLoading(true);
      // In a real app, this would be an API call to get the current user
      await new Promise((resolve) => setTimeout(resolve, 200));
      setUser(MOCK_CURRENT_USER);
      setIsLoading(false);
    };

    fetchUser();
  }, []);

  const updateUserRole = async (userId: string, role: UserRole) => {
    // In a real app, this would make an API call to update the user role
    if (user && userId === user.id) {
      setUser({ ...user, role });
      return true;
    }
    return false;
  };

  return {
    user,
    isLoading,
    isAuthenticated: !!user,
    updateUserRole,
  };
};
