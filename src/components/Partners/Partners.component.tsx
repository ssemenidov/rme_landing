import { FC } from 'react'
import styles from './Partners.module.scss'
import Link from 'next/link'
import Image from 'next/image'

import merlion from '../../../public/icons/merlion.svg'
import axoft from '../../../public/icons/axoft.svg'

const Partners: FC = () => {
  return (
    <section className={styles.partners} id={'partners'}>
      <div className={styles.content}>
        <h3 className={styles.partners_title}>Партнеры</h3>
        <div className={styles.partners_cards}>
          <div className={styles.partners_cards__item}>
            <Link
              href={'https://merlion.com/'}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={merlion} alt={'merlion'} />
            </Link>
          </div>
          <div className={styles.partners_cards__item}>
            <Link
              href={'https://www.passion.shop/'}
              target="_blank"
              rel="noopener noreferrer"
            >
              Passion
            </Link>
          </div>
          <div className={styles.partners_cards__item}>
            <Link
              href={'https://axoftglobal.ru/'}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={axoft} alt={'axoft'} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Partners }
