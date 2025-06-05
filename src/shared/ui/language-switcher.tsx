'use client'

import { Globe } from 'lucide-react'

import { useLocale } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'

import { Button } from '@/shared/ui/kit/button'

export function LanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const switchLocale = (newLocale: string) => {
    // Remove the current locale from the pathname
    const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/'
    // Navigate to the new locale
    router.push(`/${newLocale}${pathWithoutLocale}`)
  }

  return (
    <div className="flex items-center gap-2">
      <Globe className="h-4 w-4 text-white/70" />
      <div className="flex gap-1">
        <Button
          variant={locale === 'en' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => switchLocale('en')}
          className={
            locale === 'en'
              ? 'bg-white/20 text-white hover:bg-white/30'
              : 'text-white/70 hover:text-white hover:bg-white/10'
          }
        >
          EN
        </Button>
        <Button
          variant={locale === 'ru' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => switchLocale('ru')}
          className={
            locale === 'ru'
              ? 'bg-white/20 text-white hover:bg-white/30'
              : 'text-white/70 hover:text-white hover:bg-white/10'
          }
        >
          RU
        </Button>
      </div>
    </div>
  )
}
