import Discord from '~icons/tabler/brand-discord'
import GitHub from '~icons/tabler/brand-github'
import Matrix from '~icons/tabler/brand-matrix'
import Mail from '~icons/tabler/mail'

type Work = Partial<{
  title: string
  company: { name: string; url?: string }
  location: string
}>

export const work: Work = {}
export const fingerprint = '9FD6F552F73CA25AEBA8C21E0BE1310591ECE7CF'
export const links = [
  {
    label: 'github',
    icon: GitHub,
    href: 'https://github.com/tedbyron',
    class: 'delay-200',
  },
  {
    label: 'discord',
    icon: Discord,
    href: 'https://discord.com/users/176074985377366017',
    class: 'delay-300',
  },
  {
    label: 'matrix',
    icon: Matrix,
    href: 'https://matrix.to/#/@tedbyron:matrix.org',
    class: 'delay-400',
  },
  {
    label: 'email',
    icon: Mail,
    href: 'mailto:tedbyron@gmail.com',
    class: 'delay-500',
  },
] as const
