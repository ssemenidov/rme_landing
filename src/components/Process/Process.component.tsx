import { FC } from 'react'
import styles from './Process.module.scss'
import arrow1 from '../../../public/arrows/arrow1.svg'
import arrow2 from '../../../public/arrows/arrow2.svg'
import arrow3 from '../../../public/arrows/arrow3.svg'
import arrow4 from '../../../public/arrows/arrow4.svg'
import Image from 'next/image'

const data = [
  {
    title: '1 этап',
    text: 'Анализ и консультация по проекту',
    arrow: arrow1,
  },
  {
    title: '2 этап',
    text: 'Утверждение сметы и подписание договора',
    arrow: arrow2,
  },
  {
    title: '3 этап',
    text: 'Разработка индивидуального решения',
    arrow: arrow3,
  },
  {
    title: '4 этап',
    text: 'Внесение правок, тестирование и отладка',
    arrow: arrow4,
  },
  {
    title: '5 этап',
    text: 'Сдача проекта и последующая тех. поддержка',
  },
]

const Process: FC = () => {
  return (
    <div className={styles.process}>
      <div className={styles.content}>
        <h1 className={styles.process_title}>Этапы реализации</h1>
        <div className={styles.process_cards}>
          {data.map((e, i) => (
            <div className={styles.process_cards__item} key={`process_${i}`}>
              <div className={styles.process_cards__item___title}>
                {e.title}
              </div>
              <div className={styles.process_cards__item___text}>{e.text}</div>
              {e.arrow && (
                <div className={styles.arrow}>
                  <Image src={e.arrow} alt={'arrow'} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export { Process }
