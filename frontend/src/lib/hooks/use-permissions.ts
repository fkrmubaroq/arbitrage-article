import { DEFAULT_ROLE_PERMISSIONS, PERMISSIONS } from "@/lib/constants";
import { useUser } from "./use-user";

export const usePermissions = () => {
  const { user } = useUser();

  const hasPermission = (permission: string): boolean => {
    if (!user) return false;

    // If admin, grant all permissions
    if (user.role === "admin") return true;

    // Check if the user's role has the permission
    return DEFAULT_ROLE_PERMISSIONS[user.role].includes(permission);
  };

  return {
    hasPermission,
    // Common permission checks
    canCreateArticle: hasPermission(PERMISSIONS.CREATE_ARTICLE),
    canEditAnyArticle: hasPermission(PERMISSIONS.EDIT_ANY_ARTICLE),
    canEditOwnArticle: hasPermission(PERMISSIONS.EDIT_OWN_ARTICLE),
    canPublishArticle: hasPermission(PERMISSIONS.PUBLISH_ARTICLE),
    canDeleteArticle: hasPermission(PERMISSIONS.DELETE_ARTICLE),
    canManageUsers: hasPermission(PERMISSIONS.MANAGE_USERS),
    canAccessAnalytics: hasPermission(PERMISSIONS.ACCESS_ANALYTICS),
  };
};
