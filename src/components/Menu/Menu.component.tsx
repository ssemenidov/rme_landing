'use client'
import { FC, useState } from 'react'
import styles from './Menu.module.scss'
import Link from 'next/link'
import { Button } from '@/components/Button/Button.component'
import telegram from '../../../public/icons/tg.svg'
import whatsapp from '../../../public/icons/whatsapp.svg'
import Image from 'next/image'
import logo from '../../../public/logo.svg'

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
          <Link href={'#main'}>
            <Image src={logo} width={100} height={100} alt={'МосИнфоБез'} />
          </Link>
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
          <span className={styles.contacts_text}>Контакты:</span>
          <Link href={'tel:+79160070073'} className={styles.contacts_text}>
            +7 916 007-00-73
          </Link>
          <div>
            <Link href={'#'}>
              <Image src={telegram} alt={'@'} />
            </Link>
            <Link href={'https://wa.me/79160070073'} target={'_blank'}>
              <Image src={whatsapp} alt={'@'} />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
