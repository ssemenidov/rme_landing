import Image from 'next/image'
import styles from './page.module.scss'
import { Menu } from '@/components/Menu/Menu.component'
import { Hero } from '@/components/Hero/Hero.component'
import { Benefits } from '@/components/Benefits/Benefits.component'
import { Works } from '@/components/Works/Works.component'
import { ServicesComponent } from '@/components/Services/Services.component'
import { Partners } from '@/components/Partners/Partners.component'
import { Process } from '@/components/Process/Process.component'
import { AboutUsComponent } from '@/components/AboutUs/AboutUs.component'
import { ContactUsComponent } from '@/components/ContactUs/ContactUs.component'
import { FooterComponent } from '@/components/Footer/Footer.component'

export default function Home() {
  return (
    <div className={styles.page}>
      <Menu />
      <main>
        <Hero />
        <Benefits />
        <Works />
        <ServicesComponent />
        <Partners />
        <Process />
        <AboutUsComponent />
        <ContactUsComponent />
        <FooterComponent />
      </main>
    </div>
  )
}
