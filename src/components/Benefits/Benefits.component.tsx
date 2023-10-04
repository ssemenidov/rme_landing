import { FC } from 'react'
import styles from './Benefits.module.scss'
import { BenefitCard } from '@/components/Benefits/BenefitCard.component'
import user from '../../../public/icons/user.svg'
import rub from '../../../public/icons/rub.svg'
import hands from '../../../public/icons/hands.svg'
import refresh from '../../../public/icons/refresh.svg'

const Benefits: FC = () => {
  return (
    <div className={styles.benefits} id={'benefits'}>
      <div className={styles.content}>
        <div className={styles.benefits_title}>
          <span>Наши преимущества</span>
        </div>
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
              'Основанная на нашем опыте, качестве предоставляемых услуг и рыночных стандартах'
            }
            icon={rub}
          />
          <BenefitCard
            title={'Экспертное мнение и опыт'}
            text={
              'Навыки и опыт нашей команды обеспечат вас качественным и инновационным продуктом'
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
    </div>
  )
}

export { Benefits }
