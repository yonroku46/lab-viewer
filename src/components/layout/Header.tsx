'use clinet'
import Link from 'next/link'
import Image from 'next/image'
import { useTranslation } from '@/i18n'
import { languages, fallbackLng } from '@/i18n/settings'
import SubNav, { MenuItem } from '@/components/layout/SubNav'
import LngButton from '@/components/button/LngButton'
import styles from '@/styles/page.module.scss'

export default async function Header (
  { lng }: { lng: string }
) {

  if (languages.indexOf(lng) < 0) lng = fallbackLng
  const { t } = await useTranslation(lng, 'header')
  
  const menuList: Array<MenuItem> = [
    { category: t('category.mypage'), name: t('mypage.mypage'), href: `/${lng}/mypage` },
    { category: t('category.mypage'), name: t('mypage.history'), href: `/${lng}/mypage/history` },
    { category: t('category.service'), name: t('service.about'), href: `/${lng}/service` },
    { category: t('category.service'), name: t('service.help'), href: `/${lng}/service/help` },
    { category: t('category.service'), name: t('service.inquiry'), href: `/${lng}/service/inquiry` },
    { category: t('category.service'), name: t('service.contract'), href: `/${lng}/service/contract` },
    { category: t('category.shop'), name: t('shop.shop'), href: `/${lng}/shop` },
    { category: t('category.dashboard'), name: t('dashboard.admin'), href: `/${lng}/dashboard` },
  ]
  const groupedMenu: Record<string, Array<MenuItem>> = {}
  menuList.forEach(menu => {
    if (!groupedMenu[menu.category]) {
      groupedMenu[menu.category] = []
    }
    groupedMenu[menu.category].push(menu)
  })

  return(
    <header>
      <div className={styles.headerContents}>
        <Link href='/'>
          <Image
            alt="appIcon"
            src="/assets/icon/app-icon.svg"
            className={styles.logo}
            width={28}
            height={28}
            priority
          />
          <span className={styles.mainColor}>SmoothiLab</span>
        </Link>
        <div className={styles.flex}>
          <LngButton lng={lng} />
          <Link href={`/${lng}/login`}>
            <button type="button" className={styles.loginBtn}>
              {t('category.login')}
            </button>
          </Link>
        </div>
      </div>
      <nav role='navigation' className={styles.navMenu}>
        {Object.entries(groupedMenu).map(([category, menus]) => (
          <>
            <div key={category} className={styles.menu}>
              <Link href={menus[0].href}>
                {category}
              </Link>
            </div>
            <SubNav menus={menus} />
          </>
        ))}
      </nav>
    </header>
  )
}
