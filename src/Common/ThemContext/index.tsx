import { createContext, useState } from 'react';
import { MyContextValue, ThemContextProps } from '../../Types/ThemContext';

export const MyContext = createContext<MyContextValue | undefined>(undefined);

export default function ThemContext({ children }: ThemContextProps) {
    const [collapsed, setCollapsed] = useState(false);
    const showSidebar = () => {
        setCollapsed(true)
    }
    const hideSidebar = () => {
        setCollapsed(false)
    }
    const value = {
        collapsed,
        showSidebar,
        hideSidebar
    }
    return (
        <MyContext.Provider value={value}>{children} </MyContext.Provider>
    )
}