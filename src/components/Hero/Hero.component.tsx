import {FC} from 'react';
import bg from '../../../public/hero-bg.svg';
import img from '../../../public/hero-image.svg';
import styles from './Hero.module.scss'
import Image from 'next/image'
import {Button} from "@/components/Button/Button.component";

const Hero: FC = () => {
  return (
    <div style={{
      backgroundImage: `url(${bg.src})`,
      width: '100%',
      height: '100%',
    }} className={styles.hero} id={'main'}>
      <div className={styles.title}>
        <h1>
          Главный подрядчик <br/> в цифровизации <br/> Ростовской области
        </h1>
        <h2>
          Раскроем потенциал и поможем переосмыслить ваш бизнес <br/> через цифровую призму. Наши навыки и опыт в разработке ПО обеспечивают реальную бизнес-ценность для наших клиентов.
        </h2>
        <div>
          <Button text={'Оставить заявку'} />
        </div>
      </div>
      <div className={styles.image}>
        <Image src={img} alt={'Hero image'} />
      </div>
    </div>
  );
};

export {Hero};