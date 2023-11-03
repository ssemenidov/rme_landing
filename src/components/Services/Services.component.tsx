'use client'
import { FC, MutableRefObject, useRef } from 'react'
import styles from './Services.module.scss'
import dev from '../../../public/services/Developer_activity-amico.svg'
import arch from '../../../public/services/Developer activity-rafiki 1.svg'
import security from '../../../public/services/Developer activity-pana 2.svg'
import ai from '../../../public/services/Developer activity-cuate 1.svg'
import consult from '../../../public/services/Developer activity-pana 1.svg'
import site from '../../../public/services/Developer_activity-amico.svg'
import tele from '../../../public/services/Telecommuting-rafiki.svg'
import { ServiceCard } from '@/components/Services/ServiceCard.component'
import { useDraggable } from 'react-use-draggable-scroll'

const servicesData = [
  {
    tags: ['Frontend', 'Backend'],
    title: 'Разработка ПО',
    text: 'Создание корпоративного ПО для вашей компании в соответствии с требованиями и потребностями',
    image: dev,
  },
  {
    tags: ['Backend'],
    title: 'Архитектура IT-проектов',
    text: 'Разработка стратегических планов и концепций информационных проектов',
    image: arch,
  },
  {
    tags: ['Frontend', 'Backend'],
    title: 'Создание сайтов',
    text: 'От создания веб-сайта и приложения до системы безопасности, системы уведомлений и прочего',
    image: site,
  },
  {
    tags: ['Mobile', 'iOS', 'Android'],
    title: 'Мобильная разработка',
    text: 'Разработка мобильных приложения для различных платформ, таких как iOS и Android',
    image: ai,
  },
  {
    tags: ['Backend'],
    title: 'Информационная безопасность',
    text: 'Разработка стратегий безопасности, мониторинг угроз, анализ уязвимостей и реагирование на инциденты',
    image: security,
  },
  {
    tags: ['Backend'],
    title: 'AI & ML',
    text: 'Использование методов искусственного интеллекта и машинного обучения в разработке',
    image: ai,
  },

  {
    tags: ['Projects', 'Backend'],
    title: 'Консалтинг и аудит',
    text: 'Консультации в области разработки ПО, оценке технических решений, аудит кода и архитектуры систем',
    image: consult,
  },
  {
    tags: ['UI/UX', 'Frontend'],
    title: 'Прототипирование интерфейсов',
    text: 'Создание моделей, представляющих будущий дизайн и функциональность приложения или веб-сайта',
    image: dev,
  },
  {
    tags: ['Projects'],
    title: 'Поддержка созданных технологий',
    text: 'Обеспечение надежной работы вашей инновационной продукции',
    image: arch,
  },
  {
    tags: ['Projects'],
    title: 'Обработка естественного языка NLP',
    text: 'Разработка моделей для анализа и обработки данных естественного языка.',
    image: ai,
  },
  {
    tags: ['Projects'],
    title: 'Работа с генеративными моделями',
    text: 'Создание моделей, способных генерировать новые данные, тексты или изображения.',
    image: arch,
  },
  {
    tags: ['Projects'],
    title: 'Работа с платами (трассировка, инженеринг физических машин)',
    text: 'Проектирование и разработка электронных схем, трассировка печатных плат и создание физических устройств.',
    image: consult,
  },
  {
    tags: ['Projects'],
    title: 'Создание ботов для телеги, вк, дискорд',
    text: '',
    image: security,
  },
  {
    tags: ['Projects'],
    title: 'Создание CRM систем',
    text: 'Разработка специализированных программных решений для управления взаимодействием с клиентами и улучшения бизнес-процессов.',
    image: dev,
  },
  {
    tags: ['Projects'],
    title: 'Компьютерное зрение',
    text: 'Разработка алгоритмов и моделей для анализа и обработки изображений и видео.',
    image: tele,
  },
  {
    tags: ['Projects'],
    title: 'Миграция данных',
    text: 'Перенос данных из одной системы в другую при обновлении программного обеспечения или переходе на новую платформу.',
    image: site,
  },
]

export const ServicesComponent: FC = () => {
  const ref = useRef<HTMLDivElement>(null)
  const { events } = useDraggable(ref as MutableRefObject<HTMLElement>)
  return (
    <section className={styles.services} id={'services'}>
      <div className={styles.content}>
        <h3 className={styles.services_title}>Услуги</h3>
        <div className={styles.services_cards} {...events} ref={ref}>
          {servicesData.map((e, i) => (
            <ServiceCard
              title={e.title}
              text={e.text}
              icon={e.image}
              key={i}
              tags={e.tags}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
