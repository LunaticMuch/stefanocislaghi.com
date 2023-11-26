'use client'
import NextLink from "next/link";
import { usePathname } from 'next/navigation'
import cn from "classnames";

type NavItem = {
    href: string;
    text: string;
};

export default function NavItem({ href, text }: NavItem) {
    const pathname = usePathname()

    const isActive = pathname === href;

    return (
        <NextLink
            href={href}
            className={cn(isActive ? "font-bold " : "font-normal")}
        >
            <span className="px-3">{text}</span>
        </NextLink>
    );
}