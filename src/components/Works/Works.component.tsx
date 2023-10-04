import { FC } from 'react'
import styles from './Works.module.scss'
import { WorkCard } from '@/components/Works/WorkCard.component'
import img1 from '../../../public/works/ensemble.png'
import img2 from '../../../public/works/img2.png'
import img3 from '../../../public/works/phones.png'
import img4 from '../../../public/works/dott.png'
import img5 from '../../../public/works/ecom.png'
import img6 from '../../../public/works/site.png'

const Works: FC = () => {
  return (
    <div className={styles.works} id={'works'}>
      <div className={styles.content}>
        <div className={styles.works_title}>Работы</div>
        <div className={styles.works_cards}>
          <WorkCard
            text={'Real time классификация и детекция дронов'}
            img={img1}
            skills={['JavaScript', 'Frontend']}
          />
          <WorkCard
            text={'Классификация птиц по пению с помощью реккурентных сетей'}
            img={img2}
            skills={['Python']}
          />
          <WorkCard
            text={'Управление дроном и его навигация в лабиринте'}
            img={img3}
            skills={['Python']}
          />
          <WorkCard
            text={
              'Личный ассистент для сдачи экзаменов в виде Tg/Discord ботов'
            }
            img={img4}
            skills={['Java']}
          />
          <WorkCard
            text={'Модель экономически автономного умного завода на базе ROS'}
            img={img5}
            skills={['Python', 'C']}
          />
          <WorkCard
            text={'Real time классификация и детекция дронов'}
            img={img6}
            skills={['Python']}
          />
        </div>
      </div>
    </div>
  )
}

export { Works }
