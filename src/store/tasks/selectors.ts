import { RootState } from 'src/store/reducers'
import { Task } from './types'

export const selectTasks = (state: RootState): Array<Task> => state.tasks.data

export const selectError = (state: RootState): string => state.tasks.errorMessage
