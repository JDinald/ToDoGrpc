import type { ToDoItem, CreateToDoRequest, UpdateToDoRequest } from '~/types/todo'

export const useTodoApi = () => {
  const config = useRuntimeConfig()
  const apiBase = config.public.apiBase

  const fetchAllTodos = async (): Promise<ToDoItem[]> => {
    try {
      const response = await fetch(`${apiBase}/v1/todo`)
      if (!response.ok) {
        throw new Error('Failed to fetch todos')
      }
      const data = await response.json()
      return data.toDo || []
    } catch (error) {
      console.error('Error fetching todos:', error)
      throw error
    }
  }

  const fetchTodoById = async (id: number): Promise<ToDoItem> => {
    try {
      const response = await fetch(`${apiBase}/v1/todo/${id}`)
      if (!response.ok) {
        throw new Error('Failed to fetch todo')
      }
      return await response.json()
    } catch (error) {
      console.error('Error fetching todo:', error)
      throw error
    }
  }

  const createTodo = async (todo: CreateToDoRequest): Promise<{ id: number }> => {
    try {
      const response = await fetch(`${apiBase}/v1/todo`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(todo),
      })
      if (!response.ok) {
        throw new Error('Failed to create todo')
      }
      return await response.json()
    } catch (error) {
      console.error('Error creating todo:', error)
      throw error
    }
  }

  const updateTodo = async (todo: UpdateToDoRequest): Promise<{ id: number }> => {
    try {
      const response = await fetch(`${apiBase}/v1/todo`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(todo),
      })
      if (!response.ok) {
        throw new Error('Failed to update todo')
      }
      return await response.json()
    } catch (error) {
      console.error('Error updating todo:', error)
      throw error
    }
  }

  const deleteTodo = async (id: number): Promise<{ id: number }> => {
    try {
      const response = await fetch(`${apiBase}/v1/todo/${id}`, {
        method: 'DELETE',
      })
      if (!response.ok) {
        throw new Error('Failed to delete todo')
      }
      return await response.json()
    } catch (error) {
      console.error('Error deleting todo:', error)
      throw error
    }
  }

  return {
    fetchAllTodos,
    fetchTodoById,
    createTodo,
    updateTodo,
    deleteTodo,
  }
}
