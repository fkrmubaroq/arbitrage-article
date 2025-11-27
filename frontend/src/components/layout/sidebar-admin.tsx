"use client"
import { usePermissions } from "@/lib/hooks/use-permissions";
import {
  BarChart3,
  DollarSign,
  ImageIcon,
  LayoutDashboard,
  ListChecks,
  Mail,
  Settings,
  Shield,
  Tag,
  Users,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SidebarAdmin = () => {
  const currentPath = usePathname();
  const { hasPermission } = usePermissions();

  const navItems = [
    {
      to: "/admin",
      icon: LayoutDashboard,
      label: "Dashboard",
      exact: true,
      permission: null, // Everyone can access
    },
    {
      to: "/admin/article",
      icon: ListChecks,
      label: "Content Management",
      permission: "create_article",
    },
    {
      to: "/admin/media",
      icon: ImageIcon,
      label: "Media Manager",
      permission: "manage_media",
    },
    {
      to: "/admin/users",
      icon: Users,
      label: "User Management",
      permission: "manage_users",
    },
    {
      to: "/admin/users/roles",
      icon: Shield,
      label: "Roles & Permissions",
      permission: "manage_roles",
    },
    {
      to: "/admin/analytics",
      icon: BarChart3,
      label: "Analytics",
      permission: "access_analytics",
    },
    {
      to: "/admin/categories",
      icon: Tag,
      label: "Categories & Tags",
      permission: null,
    },
    {
      to: "/admin/monetization",
      icon: DollarSign,
      label: "Monetization",
      permission: "manage_monetization",
    },
    {
      to: "/admin/newsletter",
      icon: Mail,
      label: "Newsletter",
      permission: "manage_newsletter",
    },
    {
      to: "/admin/settings",
      icon: Settings,
      label: "Settings",
      permission: "manage_settings",
    },
  ];

  const isActive = (path: string, exact = false) => {
    if (exact) return currentPath === path;
    return currentPath.startsWith(path);
  };

  const filteredNavItems = navItems.filter(
    (item) => item.permission === null || hasPermission(item.permission)
  );

  return (
    <aside className="hidden md:flex flex-col w-64 border-r bg-background">
      <div className="p-6">
        <h2 className="text-lg font-bold">Admin Panel</h2>
      </div>
      <nav className="flex-1 px-3 py-2">
        <div className="space-y-1">
          {filteredNavItems.map((item) => (
            <Link
              key={item.to}
              href={item.to}
              className={`flex items-center gap-3 px-3 py-2 text-sm rounded-md ${
                isActive(item.to, item.exact)
                  ? "bg-primary/10 text-primary"
                  : "hover:bg-muted"
              }`}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </aside>
  );
};

export default SidebarAdmin;
