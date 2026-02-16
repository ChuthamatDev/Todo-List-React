import { ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, CheckCircle2, AlertCircle, Info } from 'lucide-react'
import { IconButton } from '../ui/IconButton'
import { AlertState, AlertType } from '../../context/AlertContext'

interface AlertPopupProps {
    alert: AlertState
    onClose: () => void
}

export const AlertPopup = ({ alert, onClose }: AlertPopupProps) => {
    const alertConfig: Record<
        AlertType,
        { bgColor: string; icon: ReactNode; textColor: string }
    > = {
        success: {
            bgColor: 'bg-[#A8DF8E]',
            icon: <CheckCircle2 className="w-6 h-6" strokeWidth={3} />,
            textColor: 'text-black',
        },
        error: {
            bgColor: 'bg-[#FFAAB8]',
            icon: <AlertCircle className="w-6 h-6" strokeWidth={3} />,
            textColor: 'text-black',
        },
        info: {
            bgColor: 'bg-[#FEEE91]',
            icon: <Info className="w-6 h-6" strokeWidth={3} />,
            textColor: 'text-black',
        },
        warning: {
            bgColor: 'bg-[#FEEE91]',
            icon: <AlertCircle className="w-6 h-6" strokeWidth={3} />,
            textColor: 'text-black',
        }
    }

    const currentStyle = alertConfig[alert.type] || alertConfig.info

    return (
        <AnimatePresence>
            {alert.isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -50, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className="fixed top-6 right-6 z-[100]"
                >
                    <div
                        role="alert"
                        className={`
                            ${currentStyle.bgColor} 
                            ${currentStyle.textColor}
                            border-2 border-black 
                            shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] 
                            min-w-[320px] 
                            p-4 
                            flex items-center gap-4
                        `}
                    >
                        <div className="shrink-0">{currentStyle.icon}</div>

                        <div className="flex-1 font-bold text-lg leading-tight">
                            {alert.message}
                        </div>

                        <div className="shrink-0">
                            <IconButton
                                onClick={onClose}
                                className="bg-transparent hover:bg-black hover:text-white border-transparent"
                                title="Close"
                            >
                                <X className="w-5 h-5" strokeWidth={3} />
                            </IconButton>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
