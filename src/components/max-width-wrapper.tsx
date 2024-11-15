import { cn } from "@/utils";
import { ReactNode } from "react";

interface MaxWidthWrapper {
    className ?: string;
    children ?: ReactNode
}
export const MaxWidthWrapper = ({className, children}:MaxWidthWrapper) => {
    return <div className={cn("h-full mx-auto w-full max-w-screen-xl px-2.5 md:px-20",children)}>
        {children}
    </div>
}