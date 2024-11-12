import { cn } from "@/utils"
import { HTMLAttributes, ReactNode } from "react"

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement > {
    children ?: ReactNode
}
export const Heading = ({children, className, ...props}: HeadingProps) => {
    return (
        <h1 className={cn(
            "text-4xl sm:test-5xl text-pretty font-heading font-semibold tracking-tight text-zinc-800", className
        )}{...props}>
            {children}
        </h1>
    )
}