import { useContext, useCallback } from 'react'
import { TodoContext } from '../context/TodoContext'
import { TODO_ACTIONS } from '../reducers/todoReducer'
import { Todo } from '../types'

export const useTodo = () => {
    const context = useContext(TodoContext)

    if (!context) {
        throw new Error('useTodo must be used within a TodoProvider')
    }

    const { tasks, dispatch, isLoading } = context

    const createTask = useCallback(
        (formData: Partial<Todo>) => {
            const newTask: Todo = {
                id: Date.now(),
                completed: false,
                name: formData.name || '',
                dueDate: formData.dueDate || '',
                description: formData.description || '',
                ...formData,
            }
            dispatch({ type: TODO_ACTIONS.CREATE, payload: newTask })
        },
        [dispatch]
    )

    const deleteTask = useCallback(
        (id: string | number) => {
            dispatch({ type: TODO_ACTIONS.DELETE, payload: id })
        },
        [dispatch]
    )

    const updateTask = useCallback(
        (id: string | number, updatedData: Partial<Todo>) => {
            dispatch({
                type: TODO_ACTIONS.UPDATE,
                payload: { id, ...updatedData },
            })
        },
        [dispatch]
    )

    const toggleComplete = useCallback(
        (id: string | number) => {
            dispatch({ type: TODO_ACTIONS.TOGGLE, payload: id })
        },
        [dispatch]
    )

    return {
        tasks,
        isLoading,
        createTask,
        deleteTask,
        updateTask,
        toggleComplete,
    }
}
