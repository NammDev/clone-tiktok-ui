import * as request from '~/utils/httpRequest.js'

export const search = async (q, type = 'less') => {
  const res = await request.get(`/users/search`, {
    params: {
      q,
      type,
    },
  })
  return res
}
