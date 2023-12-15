import api from './$api'
import aspida from '@aspida/fetch'
import { fetchConfig } from '@/config/microCMS'

export const client = api(aspida(fetch, fetchConfig))
