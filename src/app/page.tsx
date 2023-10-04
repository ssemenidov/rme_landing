import Image from 'next/image'
import styles from './page.module.scss'
import { Menu } from '@/components/Menu/Menu.component'
import { Hero } from '@/components/Hero/Hero.component'
import { Benefits } from '@/components/Benefits/Benefits.component'
import { Works } from '@/components/Works/Works.component'

export default function Home() {
  return (
    <div className={styles.page}>
      <Menu />
      <main>
        <Hero />
        <Benefits />
        <Works />
      </main>
    </div>
  )
}
