export const formatDateDisplay = (dateString: string | undefined): string | null => {
    if (!dateString) return null

    const parts = dateString.split('-')
    if (parts.length !== 3) return null

    const [year, month, day] = parts
    return `${day}/${month}/${year}`
}

export const getTodayString = (): string => {
    return new Date().toISOString().split('T')[0] as string
}
