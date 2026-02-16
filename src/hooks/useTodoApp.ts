import { useState, useMemo, useCallback } from 'react'
import { useTodo } from './useTodo'
import { useAlert } from './useAlert'
import { Todo } from '../types'

export const VIEW_MODE = {
    LIST: 'LIST',
    EDIT: 'EDIT',
    CREATE: 'CREATE',
}

export const useTodoApp = () => {
    const {
        tasks,
        isLoading,
        createTask,
        updateTask,
        deleteTask,
        toggleComplete,
    } = useTodo()
    const { alert, showAlert, closeAlert } = useAlert()

    const [view, setView] = useState(VIEW_MODE.LIST)
    const [editingId, setEditingId] = useState<string | number | null>(null)
    const [isConfirmOpen, setIsConfirmOpen] = useState(false)
    const [targetDeleteId, setTargetDeleteId] = useState<string | number | null>(null)

    const backToList = useCallback(() => {
        setView(VIEW_MODE.LIST)
        setEditingId(null)
    }, [])

    const handleSave = useCallback(
        (formData: Partial<Todo>) => {
            if (view === VIEW_MODE.EDIT && editingId) {
                updateTask(editingId, formData)
                showAlert('Update Task Success! 🎉', 'success')
            } else {
                createTask(formData)
                showAlert('New Task Created! 🚀', 'success')
            }

            setView(VIEW_MODE.LIST)
            setEditingId(null)
        },
        [view, editingId, updateTask, createTask, showAlert]
    )

    const handleEditClick = useCallback((todo: Todo) => {
        setEditingId(todo.id)
        setView(VIEW_MODE.EDIT)
    }, [])

    const handleDeleteRequest = useCallback((id: string | number) => {
        setTargetDeleteId(id)
        setIsConfirmOpen(true)
    }, [])

    const confirmDelete = useCallback(() => {
        if (targetDeleteId) {
            deleteTask(targetDeleteId)
            showAlert('Task Deleted! 🗑️', 'error')
        }
        setIsConfirmOpen(false)
        setTargetDeleteId(null)
    }, [targetDeleteId, deleteTask, showAlert])

    const activeTasksCount = useMemo(() =>
        tasks.filter((t: Todo) => !t.completed).length,
        [tasks])

    const editingTask = useMemo(() => {
        return view === VIEW_MODE.EDIT
            ? tasks.find((t: Todo) => t.id === editingId)
            : undefined
    }, [view, tasks, editingId])

    const goCreateMode = useCallback(() => setView(VIEW_MODE.CREATE), [])
    const closeConfirm = useCallback(() => setIsConfirmOpen(false), [])

    return {
        tasks,
        isLoading,
        alert,
        view,
        editingId,
        isConfirmOpen,
        activeTasksCount,
        editingTask,
        toggleComplete,
        closeAlert,
        backToList,
        handleSave,
        handleEditClick,
        handleDeleteRequest,
        confirmDelete,
        closeConfirm,
        goCreateMode
    }
}
