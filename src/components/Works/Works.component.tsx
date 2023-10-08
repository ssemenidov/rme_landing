'use client'
import { FC, MutableRefObject, useRef } from 'react'
import styles from './Works.module.scss'
import { WorkCard } from '@/components/Works/WorkCard.component'
import img1 from '../../../public/works/ensemble.png'
import img2 from '../../../public/works/img2.png'
import img3 from '../../../public/works/phones.png'
import img4 from '../../../public/works/dott.png'
import img5 from '../../../public/works/ecom.png'
import img6 from '../../../public/works/site.png'
import img7 from '../../../public/works/img7.jpeg'
import img8 from '../../../public/works/img8.jpeg'
import img9 from '../../../public/works/img9.jpeg'
import img10 from '../../../public/works/img10.jpeg'
import { useDraggable } from 'react-use-draggable-scroll'

const Works: FC = () => {
  const ref = useRef<HTMLDivElement>(null)
  const { events } = useDraggable(ref as MutableRefObject<HTMLElement>)
  return (
    <section className={styles.works} id={'works'}>
      <div className={styles.content}>
        <h3 className={styles.works_title}>Работы</h3>
        <div className={styles.scroll}>
          <div className={styles.works_cards} ref={ref} {...events}>
            <div className={styles.column}>
              <WorkCard
                text={'Real time классификация и детекция дронов'}
                img={img1}
                skills={['ML', 'Web']}
              />
              <WorkCard
                text={
                  'Личный ассистент для сдачи экзаменов в виде Tg/Discord ботов'
                }
                img={img4}
                skills={['Java']}
              />
            </div>
            <div className={styles.column}>
              <WorkCard
                text={
                  'Классификация птиц по пению с помощью реккурентных сетей'
                }
                img={img2}
                skills={['ML', 'Python', 'MLflow']}
              />
              <WorkCard
                text={
                  'Модель экономически автономного умного завода на базе ROS'
                }
                img={img5}
                skills={['C', 'Python']}
              />
            </div>
            <div className={styles.column}>
              <WorkCard
                text={'Управление дроном и его навигация в лабиринте'}
                img={img3}
                skills={['Python', 'OpenCV']}
              />
              <WorkCard
                text={'Онлайн примерка одежды на базе нейросетей'}
                img={img6}
                skills={['AI', 'Web', 'React']}
              />
            </div>
            <div className={styles.column}>
              <WorkCard
                text={'Клиент-серверное приложение для мобильных телефонов'}
                img={img7}
                skills={['Mobile', 'Java']}
              />
              <WorkCard
                text={'Классификация рекламы и суммаризация постов в телеграме'}
                img={img9}
                skills={['AI', 'Python', 'Dagster']}
              />
            </div>
            <div className={styles.column}>
              <WorkCard
                text={'Интерактивный сайт для игры на Flask'}
                img={img10}
                skills={['Web', 'Python', 'JavaScript']}
              />
              <WorkCard
                text={'Генерация лиц, основанная на нормальном шуме'}
                img={img10}
                skills={['Python', 'PyTorch']}
              />
            </div>
            <div className={styles.column}>
              <WorkCard
                text={'Система проверки недвижимости для сдачи'}
                img={img8}
                skills={['ML', 'Python', 'MLflow']}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Works }
