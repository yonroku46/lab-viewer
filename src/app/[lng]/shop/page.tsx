'use client'

import Link from 'next/link'
import { useTranslation } from '@/i18n/client'
import { useState } from 'react'
import { languages, fallbackLng } from '@/i18n/settings'

export default function Page(
  { params: { lng } }: { params: { lng: string } }
) {

  if (languages.indexOf(lng) < 0) lng = fallbackLng
  const { t } = useTranslation(lng)

  return (
    <article>
      <Link href={`/${lng}/shop/1`}>
        <button type="button">
          No1 Shop
        </button>
      </Link>
    </article>
  )
}