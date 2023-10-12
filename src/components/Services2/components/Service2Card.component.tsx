import { FC } from 'react'
import Image from 'next/image'
import styles from './Service2Card.module.scss'

const Service2CardComponent: FC<{
  icon: any
  title: string
  text: string
  tags: string[]
}> = ({ icon, text, title, tags }) => {
  return (
    <div className={styles.service2Card}>
      <div className={'flex flex-col'}>
        <div className={styles.service2Card_tags}>
          {tags.map((s, i) => (
            <div
              key={`${s.replace(' ', '')}_${i}`}
              className={styles.service2Card_tags__item}
            >
              {s}
            </div>
          ))}
        </div>
        <div className={styles.row}>
          <div className={styles.icon}>
            <Image src={icon} alt={title} />
          </div>
          <div className={styles.text}>
            <span>{text}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Service2CardComponent }
