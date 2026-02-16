import { TodoItem } from './TodoItem'
import { TodoHeader } from './TodoHeader'
import { TEXT_CONFIG } from '../../config/contants'
import { Todo } from '../../types'

interface TodoListProps {
    tasks: Todo[]
    activeTasksCount?: number
    onAddClick: () => void
    onEditClick: (todo: Todo) => void
    onDeleteClick: (id: string | number) => void
    onToggleClick: (id: string | number) => void
}

export const TodoList = ({
    tasks = [],
    activeTasksCount = 0,
    onAddClick,
    onEditClick,
    onDeleteClick,
    onToggleClick,
}: TodoListProps) => {
    const hasTasks = tasks.length > 0

    return (
        <section className="w-full max-w-2xl mx-auto">
            <TodoHeader
                activeTasksCount={activeTasksCount}
                onAddClick={onAddClick}
            />

            <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                {!hasTasks ? (
                    <div className="text-center py-10 border-2 border-dashed border-gray-300 rounded-lg">
                        <p className="text-gray-400 font-bold text-xl">
                            {TEXT_CONFIG.emptyState}
                        </p>
                    </div>
                ) : (
                    tasks.map((item) => (
                        <TodoItem
                            key={item.id}
                            todo={item}
                            onDelete={onDeleteClick}
                            onToggle={onToggleClick}
                            onEdit={onEditClick}
                        />
                    ))
                )}
            </div>
        </section>
    )
}
