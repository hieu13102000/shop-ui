import { ReactNode } from "react";

export interface ThemContextProps {
    children: ReactNode;
}
export interface MyContextValue {
    collapsed: boolean;
    showSidebar: () => void;
    hideSidebar: () => void;
}