
import { TextInput } from './TextInput'
import { DateInput } from './DateInput'
import { Textarea } from './Textarea'

interface FormFieldProps {
    label: string
    type?: string
    className?: string
    required?: boolean
    [key: string]: any
}

export const FormField = ({
    label,
    type = 'text',
    className = '',
    required,
    ...props
}: FormFieldProps) => {
    return (
        <div className={`flex flex-col gap-2 ${className}`}>
            <label className="font-bold text-lg">
                {label}{' '}
                {required && <span className="text-red-500">*</span>}
            </label>

            {type === 'date' ? (
                <DateInput required={required} {...props} />
            ) : type === 'textarea' ? (
                <Textarea required={required} {...props} />
            ) : (
                <TextInput required={required} {...props} />
            )}
        </div>
    )
}
