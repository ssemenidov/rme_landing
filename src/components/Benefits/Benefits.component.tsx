import { FC } from 'react'
import styles from './Benefits.module.scss'
import { BenefitCard } from '@/components/Benefits/BenefitCard.component'
import user from '../../../public/icons/user.svg'
import rub from '../../../public/icons/rub.svg'
import hands from '../../../public/icons/hands.svg'
import refresh from '../../../public/icons/refresh.svg'

const Benefits: FC = () => {
  return (
    <section className={styles.benefits} id={'benefits'}>
      <div className={styles.content}>
        <h3 className={styles.benefits_title}>Наши преимущества</h3>
        <div className={styles.benefits_cards}>
          <BenefitCard
            title={'Индивидуальный подход'}
            text={
              'Мы гарантируем, что вы получите продукт, полностью соответсвующий вашим требованиям'
            }
            icon={user}
          />
          <BenefitCard
            title={'Справедливая цена'}
            text={
              'Основанная на нашем опыте, качестве услуг и рыночных стандартах, чтобы обеспечить клиентам максимальную ценность и эффективность в каждом проекте.'
            }
            icon={rub}
          />
          <BenefitCard
            title={'Экспертное мнение и опыт'}
            text={
              'Опыт и компетенции нашей выдающейся команды будут служить гарантом создания продукта высочайшего качества, воплощающего передовые инновации.'
            }
            icon={hands}
          />
          <BenefitCard
            title={'Оптимизация ресурсов'}
            text={
              'Сэкономьте время и деньги на поиск, найм и обучение сотрудников для разработки'
            }
            icon={refresh}
          />
        </div>
      </div>
    </section>
  )
}

export { Benefits }
