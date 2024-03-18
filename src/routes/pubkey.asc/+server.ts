import { pgp } from '$lib'
import { text } from '@sveltejs/kit'

export const GET = () => {
  return text(pgp.publicKey, {
    headers: { 'content-type': 'text/plain' },
  })
}
