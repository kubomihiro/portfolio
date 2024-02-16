import React from 'react'

import styles from './Header.module.scss'
import Link from 'next/link'

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        <Link href='/'>Mihiro&#39;s Portfolio</Link>
      </h1>
      <ul className={styles.Menu}>
        <li className={styles.MenuDetail}>
          <Link href='/'>Home</Link>
        </li>
        <li className={styles.MenuDetail}>
          <Link href='/works'>Works</Link>
        </li>
        <li className={styles.MenuDetail}>
          <Link href='/#about'>About</Link>
        </li>
        {/* <li className={styles.MenuDetail}>
          <Link href='/'>Contact</Link>
        </li> */}
      </ul>
    </header>
  )
}
