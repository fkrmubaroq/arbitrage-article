import { AppSidebar } from "@/components/layout/app-sidebar"
import Header from "@/components/layout/header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { LayoutProvider } from "@/context/layout-provider"
import { cookies } from "next/headers"

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
    const cookieStore = await cookies()
    const defaultOpen = cookieStore.get("sidebar_state")?.value === "true"

    return <LayoutProvider>
        <SidebarProvider
            defaultOpen={defaultOpen}>
            <AppSidebar />
            <SidebarInset>
                <Header fixed />
                <div className="flex flex-1 flex-col">
                    <div className="@container/main flex flex-1 flex-col gap-2">
                        <div className="flex flex-col gap-4 md:gap-6 py-3">
                            <div className="px-4 lg:px-6">
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </SidebarInset>

        </SidebarProvider>
    </LayoutProvider>
}