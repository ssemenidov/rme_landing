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
import Services2Component from '@/components/Services2/Services2.component'
import { Providers } from '@/app/providers'

export default function Home() {
  return (
    <div className={styles.page}>
      <Menu />
      <main>
        <Hero />
        <Benefits />
        <Works />
        <Providers>
          <Services2Component />
        </Providers>
        <Partners />
        <Process />
        <AboutUsComponent />
        <ContactUsComponent />
        <FooterComponent />
      </main>
    </div>
  )
}
