export interface ToDoItem {
  id: number
  title: string
  description: string
  toDoStatus: 'NEW' | 'INPROGRESS' | 'COMPLETED'
}

export interface CreateToDoRequest {
  title: string
  description: string
}

export interface UpdateToDoRequest {
  id: number
  title: string
  description: string
  toDoStatus: string
}
