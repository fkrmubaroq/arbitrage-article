import { Command, Home, NewspaperIcon } from "lucide-react";

export const sidebarData = {
  sidebarLogo: {
    name: "Blogify",
    logo: Command,
    plan: "Admin Panel",
  },
  sidebarMenu: [
    {
      section: "Main Menu",
      menus: [
        {
          title: "Dashboard",
          url: "/admin/dashboard",
          icon: Home,
        },
        {
          title: "Article",
          url: "/admin/articles",
          icon: NewspaperIcon,
        },
      ],
    },
  ],
};
