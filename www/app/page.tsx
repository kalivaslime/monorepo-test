'use client'
import Image from 'next/image'
import {Inter} from 'next/font/google'
import styles from './page.module.css'
import {Tabs} from 'yolo'

const inter = Inter({subsets: ['latin']})

export default function Home() {
  return (
    <main className={styles.main}>
      <Tabs />
    </main>
  )
}
