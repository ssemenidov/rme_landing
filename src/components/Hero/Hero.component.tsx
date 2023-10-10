import { FC } from 'react'
import bg from '../../../public/hero-bg.svg'
import img from '../../../public/hero-image.svg'
import styles from './Hero.module.scss'
import Image from 'next/image'
import { Button } from '@/components/Button/Button.component'
import Link from 'next/link'

const Hero: FC = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${bg.src})`,
      }}
      className={styles.hero}
      id={'main'}
    >
      <div className={styles.title}>
        <h1>
          Надёжный подрядчик в&nbsp;цифровизации и&nbsp;развитии вашего бизнеса
        </h1>
        <h2>
          Раскроем потенциал и поможем переосмыслить ваш бизнес
          через&nbsp;цифровую призму. Наша команда специализируется
          на&nbsp;цифровой трансформации, помогая поддерживать ваше предприятие
          на пути к&nbsp;новым вершинам успеха.
        </h2>
        <Link href={'#contact-us'}>
          <Button text={'Оставить заявку'} />
        </Link>
      </div>
      <div className={styles.image}>
        <Image src={img} alt={'Hero image'} />
      </div>
    </section>
  )
}

export { Hero }
