import { ButtonHTMLAttributes, ReactNode } from 'react'

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
    color?: 'default' | 'danger' | 'info' | 'success'
}

export const IconButton = ({
    children,
    onClick,
    color = 'default',
    title,
    className = '',
    ...props
}: IconButtonProps) => {
    const colorVariants: Record<string, string> = {
        default: 'hover:bg-gray-200',
        danger: 'hover:bg-red-400 hover:text-white',
        info: 'hover:bg-blue-400 hover:text-white',
        success: 'hover:bg-green-400 hover:text-black',
    }

    return (
        <button
            onClick={onClick}
            title={title}
            className={`
                p-2 
                border-2 border-transparent 
                transition-all duration-200 
    
                hover:border-black 
                hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] 
                hover:-translate-y-1 
                active:translate-y-0 active:shadow-none
                
                ${colorVariants[color] || colorVariants.default}
                ${className}
            `}
            {...props}
        >
            {children}
        </button>
    )
}
