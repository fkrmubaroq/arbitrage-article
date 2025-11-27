export const PERMISSIONS = {
  CREATE_ARTICLE: "create_article",
  EDIT_ANY_ARTICLE: "edit_any_article",
  EDIT_OWN_ARTICLE: "edit_own_article",
  PUBLISH_ARTICLE: "publish_article",
  DELETE_ARTICLE: "delete_article",
  MANAGE_USERS: "manage_users",
  MANAGE_ROLES: "manage_roles",
  ACCESS_ANALYTICS: "access_analytics",
  MANAGE_SETTINGS: "manage_settings",
  MANAGE_MEDIA: "manage_media",
};

export const DEFAULT_ROLE_PERMISSIONS: Record<string, string[]> = {
  admin: Object.values(PERMISSIONS),
  editor: [
    PERMISSIONS.CREATE_ARTICLE,
    PERMISSIONS.EDIT_ANY_ARTICLE,
    PERMISSIONS.PUBLISH_ARTICLE,
    PERMISSIONS.ACCESS_ANALYTICS,
    PERMISSIONS.MANAGE_MEDIA,
  ],
  writer: [
    PERMISSIONS.CREATE_ARTICLE,
    PERMISSIONS.EDIT_OWN_ARTICLE,
    PERMISSIONS.MANAGE_MEDIA,
  ],
  viewer: [],
};
