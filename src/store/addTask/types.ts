interface Field {
  title: string
  kind: string
}

interface Mark {
  mark: string
  max: number
  min: number
}

interface Criteria {
  title: string
  max: number
}

interface CriteriaGroup {
  title: string
  criteria: Criteria[]
}

export interface Task {
  title: string
  groups: string[]
  curators: string[]
  retake: boolean
  description: string
  descriptionFile: string
  deadline: Date
  comment: string | null
  quantity: number
  options: number | null
  fields: Field[]
  marks: Mark[]
  criteriaGroups: CriteriaGroup[]
}

export interface AddTaskState {
  loading: boolean
  loaded: boolean
  error: string | null
}

export const ADD_TASK_REQUEST = 'ADD_TASK_REQUEST'
export const ADD_TASK_SUCCESS = 'ADD_TASK_SUCCESS'
export const ADD_TASK_FAIL = 'ADD_TASK_FAIL'

export interface AddTaskActionType {
  type: string
  payload?: string
}
