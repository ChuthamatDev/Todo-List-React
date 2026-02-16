import { useTodoApp, VIEW_MODE } from '../hooks/useTodoApp'
import { TodoList } from './TodoList/TodoList'
import { Container } from './ui/Container'
import ConfirmDialog from './dialog/ConfirmDialog'
import { TodoForm } from './TodoList/TodoForm'
import { LoadingScreen } from './ui/LoadingScreen'
import { AlertPopup } from './alertPopup/AlertPopup'

export default function TodoApp() {
    const {
        tasks,
        isLoading,
        alert,
        view,
        activeTasksCount,
        editingTask,
        editingId,
        isConfirmOpen,
        toggleComplete,
        closeAlert,
        backToList,
        handleSave,
        handleEditClick,
        handleDeleteRequest,
        confirmDelete,
        closeConfirm,
        goCreateMode
    } = useTodoApp()

    return (
        <Container>
            <AlertPopup alert={alert} onClose={closeAlert} />

            {isLoading ? (
                <LoadingScreen />
            ) : (
                <div className="animate-in fade-in duration-300">
                    {view === VIEW_MODE.LIST ? (
                        <TodoList
                            tasks={tasks}
                            activeTasksCount={activeTasksCount}
                            onAddClick={goCreateMode}
                            onEditClick={handleEditClick}
                            onDeleteClick={handleDeleteRequest}
                            onToggleClick={toggleComplete}
                        />
                    ) : (
                        <TodoForm
                            key={editingId?.toString() || 'create'}
                            initialData={editingTask}
                            onSubmit={handleSave}
                            onCancel={backToList}
                        />
                    )}
                </div>
            )}

            <ConfirmDialog
                isOpen={isConfirmOpen}
                title="Delete Task?"
                message="Are you sure? It's gone forever."
                onConfirm={confirmDelete}
                onCancel={closeConfirm}
            />
        </Container>
    )
}
