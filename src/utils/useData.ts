import { getTodayString } from './formatDate'

const today = getTodayString()

export const useData = [
    {
        name: 'Task 1',
        dueDate: today,
        description:
            'Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem.',
        id: 1,
        completed: true,
    },
    {
        name: 'Task 2',
        dueDate: today,
        description:
            'Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem.',
        id: 2,
        completed: false,
    },
    {
        name: 'Task 3',
        dueDate: today,
        description:
            'Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem.',
        id: 3,
        completed: false,
    },
]
