'use client'
import React from 'react'
import styles from './Services2.module.scss'
import dev from '../../../public/services/Developer_activity-amico.svg'
import arch from '../../../public/services/Developer activity-rafiki 1.svg'
import site from '../../../public/services/Developer_activity-amico.svg'
import ai from '../../../public/services/Developer activity-cuate 1.svg'
import security from '../../../public/services/Developer activity-pana 2.svg'
import consult from '../../../public/services/Developer activity-pana 1.svg'

// const motionProps = {
//   variants: {
//     enter: {
//       y: 0,
//       opacity: 1,
//       height: 'auto',
//       transition: {
//         height: {
//           type: 'spring',
//           stiffness: 500,
//           damping: 30,
//           duration: 1,
//         },
//         opacity: {
//           easings: 'ease',
//           duration: 1,
//         },
//       },
//     },
//     exit: {
//       y: -10,
//       opacity: 0,
//       height: 0,
//       transition: {
//         height: {
//           easings: 'ease',
//           duration: 0.25,
//         },
//         opacity: {
//           easings: 'ease',
//           duration: 0.3,
//         },
//       },
//     },
//   },
// }

const motionProps = {}

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
]

const services2Data = [
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
]
import { FC } from 'react'
import { Accordion, AccordionItem, Chip } from '@nextui-org/react'
import { Service2CardComponent } from '@/components/Services2/components/Service2Card.component'

const Services2Component: FC = () => {
  return (
    <section className={styles.services2} id={'services'}>
      <div className={styles.content}>
        <h1 className={styles.services2_title}>Услуги</h1>
        <div className={styles.items}>
          <div className={styles.acc}>
            <Accordion
              motionProps={motionProps}
              className={'m-auto'}
              variant={'light'}
            >
              {servicesData.map((e, i) => (
                <AccordionItem key={i} title={e.title}>
                  <Service2CardComponent
                    icon={e.image}
                    title={e.title}
                    text={e.text}
                    key={i}
                    tags={e.tags}
                  />
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className={styles.acc}>
            <Accordion
              motionProps={motionProps}
              className={'m-auto w-full'}
              variant={'bordered'}
              fullWidth={true}
            >
              {services2Data.map((e, i) => (
                <AccordionItem key={i} title={e.title}>
                  <Service2CardComponent
                    icon={e.image}
                    title={e.title}
                    text={e.text}
                    key={i}
                    tags={e.tags}
                  />
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
        <div className={styles.items_mobile}>
          <div className={styles.acc}>
            <Accordion
              motionProps={motionProps}
              className={'m-auto'}
              variant={'bordered'}
              defaultExpandedKeys={['0']}
            >
              {[...servicesData, ...services2Data].map((e, i) => (
                <AccordionItem key={i.toString()} title={e.title}>
                  <Service2CardComponent
                    icon={e.image}
                    title={e.title}
                    text={e.text}
                    key={i}
                    tags={e.tags}
                  />
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Services2Component }

export default Services2Component
