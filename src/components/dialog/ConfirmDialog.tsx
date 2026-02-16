import { AlertTriangle } from 'lucide-react'
import { Button } from '../ui/Button'

interface ConfirmDialogProps {
    isOpen: boolean
    title: string
    message: string
    onConfirm: () => void
    onCancel: () => void
}

export default function ConfirmDialog({
    isOpen,
    title,
    message,
    onConfirm,
    onCancel,
}: ConfirmDialogProps) {
    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
            <div
                className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
                onClick={onCancel}
            />

            <div className="relative w-full max-w-sm bg-primary border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 animate-in zoom-in-95 duration-200">
                <div className="flex flex-col items-center mb-4">
                    <div className="bg-red-100 p-3 rounded-full border-2 border-black mb-3">
                        <AlertTriangle
                            className="w-8 h-8 text-red-500"
                            strokeWidth={2.5}
                        />
                    </div>
                    <h2 className="text-2xl font-bold text-center leading-none">
                        {title}
                    </h2>
                </div>

                <p className="text-gray-700 text-center mb-8 font-medium px-4">
                    {message}
                </p>
                <div className="flex flex-col-reverse sm:flex-row gap-3 sm:gap-4">
                    <Button
                        onClick={onCancel}
                        variant="outline"
                        className="flex-1 bg-white hover:bg-gray-50 justify-center"
                    >
                        No, Keep it
                    </Button>

                    <Button
                        onClick={onConfirm}
                        variant="danger"
                        className="flex-1 justify-center"
                    >
                        Yes, Delete
                    </Button>
                </div>
            </div>
        </div>
    )
}
