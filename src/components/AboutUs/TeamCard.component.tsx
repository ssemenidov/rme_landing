import { FC } from 'react'
import styles from './AboutUs.module.scss'
import Image from 'next/image'

const TeamCard: FC<{
  title: string
  text: string
  icon: any
}> = ({ title, text, icon }) => {
  return (
    <div className={styles.teamCard} id={'benefits'}>
      <div className={styles.teamCard_icon}>
        <Image src={icon} alt={title} />
      </div>
      <div className={styles.teamCard_title}>
        <span>{title}</span>
      </div>
      <div className={styles.teamCard_text}>
        <span>{text}</span>
      </div>
    </div>
  )
}

export { TeamCard }
