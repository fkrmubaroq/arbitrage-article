"use client"
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { ThemeToggle } from "../theme-toggle";
import { SidebarTrigger } from "../ui/sidebar";
import { ProfileDropdown } from "./profile-dropdown";

export default function Header({ fixed = true, className }: { fixed?: boolean, className?: string }) {
    const [offset, setOffset] = useState(0)

    useEffect(() => {
        const onScroll = () => {
            setOffset(document.body.scrollTop || document.documentElement.scrollTop)
        }

        // Add scroll listener to the body
        document.addEventListener('scroll', onScroll, { passive: true })

        // Clean up the event listener on unmount
        return () => document.removeEventListener('scroll', onScroll)
    }, [])
    return <header
        className={cn(
            'z-50 h-16 dark:border-b-none  dark:bg-background  bg-white shadow-lg',
            fixed && 'header-fixed peer/header sticky top-0 w-[inherit]',
            offset > 10 && fixed ? 'shadow' : 'shadow-none',
            className
        )}
    >
        <div
            className={cn(
                'relative flex h-full items-center gap-3 p-4 sm:gap-4',
                offset > 10 &&
                fixed &&
                'after:bg-background/20 after:absolute after:inset-0 after:-z-10 after:backdrop-blur-lg'
            )}
        >
            <SidebarTrigger variant='outline' className='max-md:scale-125' />
            <div className='ms-auto flex items-center gap-4'>
                <ThemeToggle />
                {/* <ConfigDrawer /> */}
                <ProfileDropdown />
            </div>
        </div>
    </header>
}