import { RootState } from 'src/store/reducers'

export const selectError = (state: RootState) => state.account.errorMessage
