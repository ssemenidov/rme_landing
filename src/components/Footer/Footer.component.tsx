import { FC } from 'react'
import styles from './Footer.module.scss'
const FooterComponent: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_bottom}>
        <span>Copyright © 2022 МосИнфоБез</span>
      </div>
    </footer>
  )
}

export { FooterComponent }
