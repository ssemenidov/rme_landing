'use client'
import { FC, useState } from 'react'
import styles from './Menu.module.scss'
import Link from 'next/link'
import { Button } from '@/components/Button/Button.component'
import telegram from '../../../public/icons/tg.svg'
import whatsapp from '../../../public/icons/whatsapp.svg'
import Image from 'next/image'

export const Menu: FC = () => {
  const [isOpened, setOpened] = useState(false)

  return (
    <>
      <div className={styles.hamburger}>
        <label htmlFor="check">
          <input
            type="checkbox"
            id="check"
            checked={isOpened}
            onChange={(e) => setOpened(e.target.checked)}
          />
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
      {isOpened && (
        <div className={styles.backdrop} onClick={() => setOpened(false)}></div>
      )}
      <div className={`${styles.menu} ${isOpened ? styles.active : ''}`}>
        <div className={styles.logo}>
          <Link href={'/'}>RMe</Link>
        </div>
        <div className={styles.nav}>
          <div className={styles.item}>
            <Link href={'#benefits'} onClick={() => setOpened(false)}>
              Преимущества
            </Link>
          </div>
          <div className={styles.item}>
            <Link href={'#works'} onClick={() => setOpened(false)}>
              Работы
            </Link>
          </div>
          <div className={styles.item}>
            <Link href={'#services'} onClick={() => setOpened(false)}>
              Услуги
            </Link>
          </div>
          <div className={styles.item}>
            <Link href={'#partners'} onClick={() => setOpened(false)}>
              Партнеры
            </Link>
          </div>
          <div className={styles.item}>
            <Link href={'#about-us'} onClick={() => setOpened(false)}>
              О нас
            </Link>
          </div>
        </div>
        <Link href={'#contact-us'} className={styles.button}>
          <Button text={'Оставить заявку'} size={'md'} />
        </Link>
        <div className={styles.bottom}>
          <span>LLC “MIB”</span>
          <div>
            <Link href={'#'}>
              <Image src={telegram} alt={'@'} />
            </Link>
            <Link href={'#'}>
              <Image src={whatsapp} alt={'@'} />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
