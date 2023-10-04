import { FC } from 'react'
import styles from './Benefits.module.scss'
import Image from 'next/image'

const BenefitCard: FC<{
  title: string
  text: string
  icon: any
}> = ({ title, text, icon }) => {
  return (
    <div className={styles.benefitCard} id={'benefits'}>
      <div className={styles.benefitCard_icon}>
        <Image src={icon} alt={title} />
      </div>
      <div className={styles.benefitCard_title}>
        <span>{title}</span>
      </div>
      <div className={styles.benefitCard_text}>
        <span>{text}</span>
      </div>
    </div>
  )
}

export { BenefitCard }
