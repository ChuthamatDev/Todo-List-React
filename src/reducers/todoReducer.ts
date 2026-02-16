import { Todo, TodoAction } from '../types'

export const TODO_ACTIONS = {
    CREATE: 'CREATE',
    DELETE: 'DELETE',
    UPDATE: 'UPDATE',
    TOGGLE: 'TOGGLE',
    SET: 'SET',
    INIT_DATA: 'INIT_DATA',
} as const

export const todoReducer = (state: Todo[], action: TodoAction): Todo[] => {
    switch (action.type) {
        case TODO_ACTIONS.INIT_DATA:
            return action.payload as Todo[]

        case TODO_ACTIONS.CREATE:
            // @ts-ignore: payload might be checked incorrectly if using generic action type broadly, but safe here
            return [...state, action.payload as Todo]

        case TODO_ACTIONS.DELETE:
            return state.filter((todo) => todo.id !== action.payload)

        case TODO_ACTIONS.UPDATE:
            // @ts-ignore: payload partial check
            const updatePayload = action.payload as Todo
            return state.map((todo) =>
                todo.id === updatePayload.id
                    ? { ...todo, ...updatePayload }
                    : todo
            )

        case TODO_ACTIONS.TOGGLE:
            return state.map((t) =>
                t.id === action.payload ? { ...t, completed: !t.completed } : t
            )

        case TODO_ACTIONS.SET:
            return action.payload as Todo[]

        default:
            return state
    }
}
