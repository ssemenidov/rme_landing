import { FC } from 'react'
import styles from './Works.module.scss'
import Image from 'next/image'

const WorkCard: FC<{
  text: string
  img: any
  skills: string[]
}> = ({ img, text, skills }) => {
  return (
    <div className={styles.worksCard}>
      <div className={styles.worksCard_image}>
        <Image src={img} alt={text} />
      </div>
      <div className={styles.worksCard_skill}>
        {skills.map((s, i) => (
          <div
            key={`${s.replace(' ', '')}_${i}`}
            className={styles.worksCard_skill__item}
          >
            {s}
          </div>
        ))}
      </div>

      <div className={styles.worksCard_title}>
        <span>{text}</span>
      </div>
    </div>
  )
}

export { WorkCard }
