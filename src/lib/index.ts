import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const defaultTitle = 'Teddy Byron'
export const formatTitle = (title: string) => `${title} \u2022 ${defaultTitle}`

export const cn = (...args: ClassValue[]) => twMerge(clsx(args))
