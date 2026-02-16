import { InputHTMLAttributes } from 'react'

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> { }

export const TextInput = ({
    type = 'text',
    className = '',
    ...props
}: TextInputProps) => {
    return (
        <input
            type={type}
            className={`
                w-full 
                border-2 border-black 
                px-4 py-2 
                text-lg font-medium 
                bg-white 
                focus:outline-none 
                focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] 
                transition-shadow duration-200
                placeholder:text-gray-400
                ${className}
            `}
            {...props}
        />
    )
}
