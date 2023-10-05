import { FC } from 'react'
import styles from './Menu.module.scss'
import Link from 'next/link'
import { Button } from '@/components/Button/Button.component'
import telegram from '../../../public/icons/tg.svg'
import whatsapp from '../../../public/icons/whatsapp.svg'
import Image from 'next/image'

export const Menu: FC = () => {
  return (
    <div className={styles.menu}>
      <div className={styles.logo}>
        <Link href={'/'}>RMe</Link>
      </div>
      <div className={styles.nav}>
        <div className={styles.item}>
          <Link href={'#benefits'}>Преимущества</Link>
        </div>
        <div className={styles.item}>
          <Link href={'#works'}>Работы</Link>
        </div>
        <div className={styles.item}>
          <Link href={'#services'}>Услуги</Link>
        </div>
        <div className={styles.item}>
          <Link href={'#partners'}>Партнеры</Link>
        </div>
        <div className={styles.item}>О нас</div>
      </div>
      <div className={styles.button}>
        <Button text={'Оставить заявку'} size={'md'} />
      </div>
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
  )
}
