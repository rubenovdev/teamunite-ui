import axios from 'axios'
import Cookies from 'js-cookie'

import { token } from 'src/static'

export default axios.create({
  baseURL: 'https://api.teamunite.ru/v1',
  headers: { Authorization: `Bearer ${Cookies.get(token)}` },
})
