import { AppSidebar } from "@/components/app-sidebar"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { LayoutProvider } from "@/context/layout-provider"
import { cookies } from "next/headers"

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
    const cookieStore = await cookies()
    const defaultOpen = cookieStore.get("sidebar_state")?.value === "true"

    return <LayoutProvider>
        <SidebarProvider defaultOpen={defaultOpen}>
            <AppSidebar />
            <main>
                <SidebarTrigger />
                {children}
            </main>
        </SidebarProvider>
    </LayoutProvider>
}