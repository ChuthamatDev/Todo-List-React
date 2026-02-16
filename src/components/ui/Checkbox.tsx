import { InputHTMLAttributes } from 'react'
import { Check } from 'lucide-react'

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
    checked: boolean
}

export const Checkbox = ({
    checked,
    onChange,
    className = '',
    ...props
}: CheckboxProps) => {
    return (
        <label
            className={`relative flex items-center justify-center cursor-pointer group ${className}`}
        >
            <input
                type="checkbox"
                className="sr-only peer"
                checked={checked}
                onChange={onChange}
                {...props}
            />

            <div
                className={`
                w-6 h-6 
                border-2 border-black 
                bg-white 
                flex items-center justify-center
                transition-all duration-200 ease-out
                
                group-hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
                group-hover:-translate-y-0.5
                
                peer-checked:bg-secondary
            `}
            >
                <Check
                    className={`
                        w-4 h-4 text-black 
                        transition-transform duration-200
                        ${checked
                            ? 'scale-100 opacity-100'
                            : 'scale-0 opacity-0'
                        }
                    `}
                    strokeWidth={4}
                />
            </div>
        </label>
    )
}
