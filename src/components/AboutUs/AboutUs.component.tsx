'use client'
import { FC, MutableRefObject, useRef } from 'react'
import styles from './AboutUs.module.scss'
import mlImage from '../../../public/teams/ml.jpeg'
import webImage from '../../../public/teams/web.jpeg'
import gameImage from '../../../public/teams/gamedev.jpeg'
import mcuImage from '../../../public/teams/mcu.jpeg'
import designImage from '../../../public/teams/design.jpeg'
import BAImage from '../../../public/teams/BA.jpeg'
import { TeamCard } from '@/components/AboutUs/TeamCard.component'
import { useDraggable } from 'react-use-draggable-scroll'

const cards = [
  {
    title: 'Отдел ML-разработки',
    text: 'Эксперты в области разработки и обучении моделей машинного обучения. Исследуют и внедряют новые методы и подходы для решения сложных задач',
    image: mlImage,
  },
  {
    title: 'Отдел веб-разработки',
    text: 'Эксперты в области разработки и создания веб-сайтов и приложений. Интегрируют продукт с другими системами и платформами',
    image: webImage,
  },
  {
    title: 'Отдел Gamedev',
    text: 'Эксперты в области разработки и создания компьютерных и мобильных игр. Помогут внедрить игровые механики в рабочие процессы',
    image: gameImage,
  },
  {
    title: 'Отдел разработки MCU',
    text: 'Экперты в проектировании микроконтроллерных устройств. Создают инновационные устройства и могут упростить решение технических задач',
    image: mcuImage,
  },
  {
    title: 'Отдел дизайна',
    text: 'Эксперты в графическом, веб или промышленном дизайне. Отвечают за создание эстетически привлекательного и функционального продукта',
    image: designImage,
  },
  {
    title: 'Бизнес-аналитика',
    text: 'Эксперты в области анализа данных и разработке стратегий и рекомендаций для улучшения бизнес-процессов и принятия решений в организации',
    image: BAImage,
  },
]

const AboutUsComponent: FC = () => {
  const ref = useRef<HTMLDivElement>(null)
  const { events } = useDraggable(ref as MutableRefObject<HTMLElement>)
  return (
    <div className={styles.aboutUs} id={'about-us'}>
      <div className={styles.content}>
        <h3 className={styles.aboutUs_title}>Наша команда</h3>
        <h4 className={styles.aboutUs_subtitle}>
          RMe - Главный подрядчик в организации цифровизации <br /> Ростовской
          области
        </h4>
        <div className={styles.aboutUs_cards} ref={ref} {...events}>
          {cards.map((e, i) => (
            <TeamCard
              title={e.title}
              text={e.text}
              icon={e.image}
              key={`team_${i}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export { AboutUsComponent }
