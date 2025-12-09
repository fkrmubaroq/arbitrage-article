"use client"
import {
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
} from '@/components/ui/sidebar'
import Link from 'next/link'

export function AppTitle() {
  const { setOpenMobile } = useSidebar()
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton
          size='lg'
            className='group-data-[state=collapsed]:bg-red-500'
          asChild
        >
          <div className='group-data-[state=collapsed]:hidden'>
            <Link
              href='/'
              onClick={() => setOpenMobile(false)}
              className='grid flex-1 text-start text-sm leading-tight'
            >
              <span className='truncate font-bold'>Shadcn-Admin</span>
              <span className='truncate text-xs'>Vite + ShadcnUI</span>
            </Link>
          </div>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
