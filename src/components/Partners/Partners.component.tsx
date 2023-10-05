import { FC } from 'react'
import styles from './Partners.module.scss'
import Link from 'next/link'

const Partners: FC = () => {
  return (
    <div className={styles.partners} id={'partners'}>
      <div className={styles.content}>
        <h1 className={styles.partners_title}>Партнеры</h1>
        <div className={styles.partners_cards}>
          <div className={styles.partners_cards__item}>
            <Link
              href={'https://merlion.com/'}
              target="_blank"
              rel="noopener noreferrer"
            >
              Merlion
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
              Axoft
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Partners }
