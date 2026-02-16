import { createContext, useState, useCallback, ReactNode } from 'react'


export type AlertType = 'success' | 'error' | 'info' | 'warning'

export interface AlertState {
    isOpen: boolean
    message: string
    type: AlertType
}

export interface AlertContextType {
    alert: AlertState
    showAlert: (message: string, type?: AlertType, duration?: number) => void
    closeAlert: () => void
}

const AlertContext = createContext<AlertContextType | undefined>(undefined)

export const AlertProvider = ({ children }: { children: ReactNode }) => {
    const [alert, setAlert] = useState<AlertState>({
        isOpen: false,
        message: '',
        type: 'success',
    })

    const closeAlert = useCallback(() => {
        setAlert((prev) => ({ ...prev, isOpen: false }))
    }, [])

    const showAlert = useCallback(
        (message: string, type: AlertType = 'success', duration = 3000) => {
            setAlert({ isOpen: true, message, type })

            if (duration > 0) {
                setTimeout(() => {
                    closeAlert()
                }, duration)
            }
        },
        [closeAlert]
    )

    return (
        <AlertContext.Provider value={{ alert, closeAlert, showAlert }}>
            {children}
            {/* AlertPopup might need updating to accept these props if it doesn't already */}
        </AlertContext.Provider>
    )
}

export { AlertContext }
