import { FC } from 'react'
import styles from './Services.module.scss'
import Image from 'next/image'

const ServiceCard: FC<{
  title: string
  text: string
  icon: any
  tags: string[]
}> = ({ title, text, icon, tags }) => {
  return (
    <div className={styles.serviceCard} id={'benefits'}>
      <div className={styles.serviceCard_tags}>
        {tags.map((s, i) => (
          <div
            key={`${s.replace(' ', '')}_${i}`}
            className={styles.serviceCard_tags__item}
          >
            {s}
          </div>
        ))}
      </div>
      <div className={styles.serviceCard_icon}>
        <Image src={icon} alt={title} />
      </div>
      <div className={styles.serviceCard_title}>
        <span>{title}</span>
      </div>
      <div className={styles.serviceCard_text}>
        <span>{text}</span>
      </div>
    </div>
  )
}

export { ServiceCard }
