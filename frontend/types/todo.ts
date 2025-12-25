export interface ToDoItem {
  id: number
  title: string
  description: string
  to_do_status: 'NEW' | 'INPROGRESS' | 'COMPLETED'
}

export interface CreateToDoRequest {
  title: string
  description: string
}

export interface UpdateToDoRequest {
  id: number
  title: string
  description: string
  to_do_status: string
}
