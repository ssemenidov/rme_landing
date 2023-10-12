import { FC } from 'react'
import Image from 'next/image'
import styles from './Service2Card.module.scss'

const Service2CardComponent: FC<{ icon: any; title: string; text: string }> = ({
  icon,
  text,
  title,
}) => {
  return (
    <div className={styles.service2Card}>
      <div className={styles.icon}>
        <Image src={icon} alt={title} />
      </div>
      <div className={styles.text}>
        <span>{text}</span>
      </div>
    </div>
  )
}

export { Service2CardComponent }
