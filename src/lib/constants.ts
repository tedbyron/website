import resolveConfig from 'tailwindcss/resolveConfig'
import Discord from '~icons/tabler/brand-discord'
import GitHub from '~icons/tabler/brand-github'
import Matrix from '~icons/tabler/brand-matrix'
import Mail from '~icons/tabler/mail'
import tailwindConfig from '../../tailwind.config'

export const colors = resolveConfig(tailwindConfig).theme.colors

export const domain = 'tedbyron.com'

type Work = Partial<{
  title: string
  company: { name: string; url?: string }
  location: string
}>

export const work: Work = {}

export const fingerprint = '9FD6F552F73CA25AEBA8C21E0BE1310591ECE7CF'
if (fingerprint.length % 4 !== 0) {
  throw new Error('fingerprint has invalid length')
}

export const links = [
  {
    label: 'github',
    component: GitHub,
    href: 'https://github.com/tedbyron',
  },
  {
    label: 'discord',
    component: Discord,
    href: 'https://discord.com/users/176074985377366017',
  },
  {
    label: 'matrix',
    component: Matrix,
    href: 'https://matrix.to/#/@tedbyron:matrix.org',
  },
  {
    label: 'email',
    component: Mail,
    href: 'mailto:tedbyron@gmail.com',
  },
]
