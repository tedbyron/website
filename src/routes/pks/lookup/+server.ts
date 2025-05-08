import { error, text } from '@sveltejs/kit'

import key from '../../../../static/pgp.asc?raw'
import type { RequestHandler } from './$types'

export const GET: RequestHandler = ({ url }) => {
  const op = url.searchParams.get('op')

  switch (op) {
    case 'get':
      return text(key, {
        headers: { 'content-type': 'text/plain' },
      })
    default:
      return error(405)
  }
}
