export interface Todo {
    id: string | number
    name: string
    dueDate: string
    description: string
    completed: boolean
}

export type TodoAction =
    | { type: 'CREATE'; payload: Todo }
    | { type: 'DELETE'; payload: string | number }
    | { type: 'UPDATE'; payload: Partial<Todo> & { id: string | number } }
    | { type: 'TOGGLE'; payload: string | number }
    | { type: 'SET'; payload: Todo[] }
    | { type: 'INIT_DATA'; payload: Todo[] }

export interface TodoContextType {
    tasks: Todo[]
    // dispatch: React.Dispatch<TodoAction> // จะเพิ่มเมื่อ import React แล้ว
    dispatch: any // ใช้ any ไปก่อนในไฟล์นี้ หรือ import React ถ้าจำเป็น แต่ปกติ Context Type จะอยู่ในไฟล์ context หรือแยกออกมา
    isLoading: boolean
}