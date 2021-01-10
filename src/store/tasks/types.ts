export interface Task {
  archive: boolean
  comment: string
  criteriaGroups: Array<{ criteria: Array<{ max: number; title: string }>; title: string }>
  curators: Array<string>
  deadline: string
  description: string
  descriptionFile: string
  fields: Array<{ title: string; kind: string }>
  groups: Array<string>
  marks: Array<{ mark: string; max: string; min: string }>
  option: any
  owner: string
  quantity: number
  retake: boolean
  title: string
  _id: string
}

export interface TasksState {
  data: Array<Task>
  errorMessage: string
}

interface TasksGetSuccess {
  type: 'GET_TASKS_SUCCESS'
  payload: Array<Task>
}

interface TasksGetError {
  type: 'GET_TASKS_ERROR'
  payload: string
}

export type TasksActionTypes = TasksGetSuccess | TasksGetError
