import { RootState } from 'src/store/reducers'

export const selectError = (state: RootState): string => state.account.errorMessage
