import { FETCH_PROJECTS, START, SUCCESS, FAIL } from './../common'

export const projectsReducer = (
  profilesState: ProfilesData = {
    loading: false,
    loaded: false,
    error: null,
    entities: [],
  },
  action: any
) => {
  switch (action.type) {
    case FETCH_PROJECTS + START:
      return {
        ...profilesState,
        loading: true,
      }
    case FETCH_PROJECTS + SUCCESS:
      return {
        ...profilesState,
        loading: false,
        loaded: true,
        error: null,
        entities: action.response,
      }
    case FETCH_PROJECTS + FAIL:
      return {
        ...profilesState,
        loading: false,
        loaded: false,
        error: action.error,
      }
    default:
      return profilesState
  }
}

interface ProfilesData {
  loading: boolean
  loaded: boolean
  error: null | string
  entities: Array<any>
}
