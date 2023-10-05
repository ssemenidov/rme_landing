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
        width: '100%',
        height: '100%',
      }}
      className={styles.hero}
      id={'main'}
    >
      <div className={styles.title}>
        <h1>
          Главный подрядчик <br /> в цифровизации <br /> Ростовской области
        </h1>
        <h2>
          Раскроем потенциал и поможем переосмыслить ваш бизнес <br /> через
          цифровую призму. Наши навыки и опыт в разработке ПО обеспечивают
          реальную бизнес-ценность для наших клиентов.
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
