import { error } from '@sveltejs/kit'
import key from '../../../../../static/pgp.asc?raw'
import type { RequestHandler } from './$types'

export const GET: RequestHandler = ({ url }) => {
  const op = url.searchParams.get('op')

  if (op === 'get') {
    return new Response(key, {
      headers: {
        'cache-control': 'max-age=86400, public',
        'content-type': 'application/pgp-keys',
      },
    })
  }

  error(501)
}
