import {
    createContext,
    useReducer,
    useEffect,
    useState,
    ReactNode,
    Dispatch,
} from 'react'
import { TODO_ACTIONS, todoReducer } from '../reducers/todoReducer'
import { useData } from '../utils/useData'
import { Todo, TodoAction } from '../types'

export interface TodoContextType {
    tasks: Todo[]
    dispatch: Dispatch<TodoAction>
    isLoading: boolean
}

const TodoContext = createContext<TodoContextType | undefined>(undefined)

export const TodoProvider = ({ children }: { children: ReactNode }) => {
    const [isLoading, setIsLoading] = useState(true)

    const [tasks, dispatch] = useReducer(todoReducer, [])

    useEffect(() => {
        const loadData = async () => {
            setIsLoading(true)

            await new Promise((resolve) => setTimeout(resolve, 1500))

            const localData = localStorage.getItem('Todo-List')

            let dataToLoad: Todo[]
            if (localData) {
                try {
                    dataToLoad = JSON.parse(localData)
                } catch (error) {
                    console.error('Error parsing data:', error)
                    dataToLoad = useData
                }
            } else {
                dataToLoad = useData
            }

            dispatch({
                type: TODO_ACTIONS.INIT_DATA,
                payload: dataToLoad,
            })
            setIsLoading(false)
        }

        loadData()
    }, [])

    useEffect(() => {
        if (!isLoading) {
            localStorage.setItem('Todo-List', JSON.stringify(tasks))
        }
    }, [tasks, isLoading])

    return (
        <TodoContext.Provider value={{ tasks, dispatch, isLoading }}>
            {children}
        </TodoContext.Provider>
    )
}

export { TodoContext }


