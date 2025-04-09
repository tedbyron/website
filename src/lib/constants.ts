import Discord from '~icons/tabler/brand-discord'
import GitHub from '~icons/tabler/brand-github'
import Matrix from '~icons/tabler/brand-matrix'
import Mail from '~icons/tabler/mail'

export const job = {
  title: 'software engineer',
  company: {
    name: 'darko',
    url: 'https://darkoinc.com',
  },
} as const
export const fingerprint = '9FD6F552F73CA25AEBA8C21E0BE1310591ECE7CF'
export const links = [
  {
    label: 'github',
    icon: GitHub,
    href: 'https://github.com/tedbyron',
  },
  {
    label: 'discord',
    icon: Discord,
    href: 'https://discord.com/users/176074985377366017',
  },
  {
    label: 'matrix',
    icon: Matrix,
    href: 'https://matrix.to/#/@tedbyron:matrix.org',
  },
  { label: 'email', icon: Mail, href: 'mailto:tedbyron@gmail.com' },
] as const
