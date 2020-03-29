import { FETCH_PROJECTS, START, SUCCESS, FAIL } from './../common'

export const fetchProjects = () => (dispatch: any) => {
  dispatch({
    type: FETCH_PROJECTS + START,
  })
  fetch('https://api.teamunite.ru/api/v1/projects/active')
    .then(res => res.json())
    .then(res =>
      dispatch({
        type: FETCH_PROJECTS + SUCCESS,
        response: res.data,
      })
    )
    .catch(error => {
      dispatch({
        type: FETCH_PROJECTS + FAIL,
        error,
      })
    })
}
