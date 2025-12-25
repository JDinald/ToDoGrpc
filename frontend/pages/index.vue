<template>
  <div>
    <div class="header">
      <h1>📝 ToDo Manager</h1>
      <p>Manage your tasks efficiently</p>
    </div>

    <div class="container">
      <!-- Create New Todo Section -->
      <div class="card">
        <h2 class="form-label">{{ editingTodo ? 'Edit Task' : 'Create New Task' }}</h2>

        <form @submit.prevent="editingTodo ? handleUpdate() : handleCreate()">
          <div class="form-group">
            <label class="form-label">Title</label>
            <input
              v-model="formData.title"
              type="text"
              class="form-input"
              placeholder="Enter task title"
              required
            />
          </div>

          <div class="form-group">
            <label class="form-label">Description</label>
            <textarea
              v-model="formData.description"
              class="form-textarea"
              placeholder="Enter task description"
              required
            ></textarea>
          </div>

          <div v-if="editingTodo" class="form-group">
            <label class="form-label">Status</label>
            <select v-model="formData.toDoStatus" class="form-select">
              <option value="NEW">New</option>
              <option value="IN PROGRESS">In Progress</option>
              <option value="COMPLETED">Completed</option>
            </select>
          </div>

          <div class="flex gap-1">
            <button type="submit" class="btn btn-primary">
              {{ editingTodo ? 'Update Task' : 'Create Task' }}
            </button>
            <button
              v-if="editingTodo"
              type="button"
              class="btn btn-success"
              @click="cancelEdit"
            >
              Cancel
            </button>
          </div>
        </form>

        <div v-if="error" class="alert alert-error mt-2">
          {{ error }}
        </div>
        <div v-if="successMessage" class="alert alert-success mt-2">
          {{ successMessage }}
        </div>
      </div>

      <!-- Todo List Section -->
      <div class="mb-3">
        <h2 class="form-label">Your Tasks</h2>
      </div>

      <div v-if="loading" class="loading">
        Loading tasks...
      </div>

      <div v-else-if="todos.length === 0" class="empty-state">
        <p>No tasks yet. Create your first task above!</p>
      </div>

      <div v-else>
        <div
          v-for="todo in todos"
          :key="todo.id"
          class="todo-item"
          :class="`status-${todo.toDoStatus.toLowerCase().replace(/\s+/g, '-')}`"
        >
          <div class="todo-header">
            <h3 class="todo-title">{{ todo.title }}</h3>
            <span
              class="status-badge"
              :class="`status-${todo.toDoStatus.toLowerCase().replace(/\s+/g, '-')}`"
            >
              {{ todo.toDoStatus }}
            </span>
          </div>

          <p class="todo-description">{{ todo.description }}</p>

          <div class="todo-footer">
            <span class="todo-id">ID: {{ todo.id }}</span>
            <div class="todo-actions">
              <button
                class="btn btn-success btn-small"
                @click="startEdit(todo)"
              >
                Edit
              </button>
              <button
                class="btn btn-danger btn-small"
                @click="handleDelete(todo.id)"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ToDoItem } from '~/types/todo'

const { fetchAllTodos, createTodo, updateTodo, deleteTodo } = useTodoApi()

const todos = ref<ToDoItem[]>([])
const loading = ref(true)
const error = ref('')
const successMessage = ref('')
const editingTodo = ref<ToDoItem | null>(null)

const formData = ref({
  title: '',
  description: '',
  toDoStatus: 'NEW'
})

// Load todos on mount
onMounted(async () => {
  await loadTodos()
})

const loadTodos = async () => {
  try {
    loading.value = true
    error.value = ''
    todos.value = await fetchAllTodos()
  } catch (err) {
    error.value = 'Failed to load tasks. Please check if the backend is running.'
    console.error(err)
  } finally {
    loading.value = false
  }
}

const handleCreate = async () => {
  try {
    error.value = ''
    successMessage.value = ''

    await createTodo({
      title: formData.value.title,
      description: formData.value.description
    })

    successMessage.value = 'Task created successfully!'
    formData.value = { title: '', description: '', toDoStatus: 'NEW' }

    await loadTodos()

    setTimeout(() => {
      successMessage.value = ''
    }, 3000)
  } catch (err) {
    error.value = 'Failed to create task'
    console.error(err)
  }
}

const startEdit = (todo: ToDoItem) => {
  editingTodo.value = todo
  formData.value = {
    title: todo.title,
    description: todo.description,
    toDoStatus: todo.toDoStatus
  }

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const cancelEdit = () => {
  editingTodo.value = null
  formData.value = { title: '', description: '', toDoStatus: 'NEW' }
}

const handleUpdate = async () => {
  if (!editingTodo.value) return

  try {
    error.value = ''
    successMessage.value = ''

    await updateTodo({
      id: editingTodo.value.id,
      title: formData.value.title,
      description: formData.value.description,
      toDoStatus: formData.value.toDoStatus
    })

    successMessage.value = 'Task updated successfully!'
    cancelEdit()
    await loadTodos()

    setTimeout(() => {
      successMessage.value = ''
    }, 3000)
  } catch (err) {
    error.value = 'Failed to update task'
    console.error(err)
  }
}

const handleDelete = async (id: number) => {
  if (!confirm('Are you sure you want to delete this task?')) {
    return
  }

  try {
    error.value = ''
    successMessage.value = ''

    await deleteTodo(id)

    successMessage.value = 'Task deleted successfully!'
    await loadTodos()

    setTimeout(() => {
      successMessage.value = ''
    }, 3000)
  } catch (err) {
    error.value = 'Failed to delete task'
    console.error(err)
  }
}
</script>

<style scoped>
.todo-id {
  color: var(--color-text-muted);
  font-size: 0.875rem;
}
</style>
