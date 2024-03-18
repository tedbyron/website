import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const defaultTitle = 'Teddy Byron'
export const formatTitle = (title: string) => `${title} \u2022 ${defaultTitle}`

export const cn = (...args: ClassValue[]) => twMerge(clsx(args))

export const pgp = {
  fingerprint: '9FD6 F552 F73C A25A EBA8  C21E 0BE1 3105 91EC E7CF',
  publicKey: `-----BEGIN PGP PUBLIC KEY BLOCK-----

mDMEZfe9/xYJKwYBBAHaRw8BAQdAyPlpr+L1nz4vxNaKz0Q0OCfXjUaenpM6YJby
uF7LVNG0GVRlZGR5IEJ5cm9uIDx0ZWRAdGVkLm9vbz6IkwQTFgoAOxYhBJ/W9VL3
PKJa66jCHgvhMQWR7OfPBQJl973/AhsDBQsJCAcCAiICBhUKCQgLAgQWAgMBAh4H
AheAAAoJEAvhMQWR7OfPljgA/RNo1sXX6RQ6dYqmAr62N/D8+m3PufAiNF1Vbvc3
QCbkAP9m50uzMB87Xfq5PAYwucKuqcLEnOWPAgzRxxVdi04ADLg4BGX3vf8SCisG
AQQBl1UBBQEBB0D4vtrYjLRtOG2NAcEfWLt0gEzWxvKULoXBUfTPcsUZbQMBCAeI
eAQYFgoAIBYhBJ/W9VL3PKJa66jCHgvhMQWR7OfPBQJl973/AhsMAAoJEAvhMQWR
7OfP+gQBAJ4AAm9DsEMPNLEUH52zOSwhjzXuutS9+s6ZxmxqJiF2AQDa6pA8Ijpz
/I6ep9SzPv00waxWLRfVTiK5cpDk2ckfBA==
=Py8v
-----END PGP PUBLIC KEY BLOCK-----`,
}
