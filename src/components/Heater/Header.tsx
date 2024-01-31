import React from 'react'

import styles from './Header.module.scss'
import Link from 'next/link'

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        <Link href='/'>Mihiro's Portfolio</Link>
      </h1>
    </header>
  )
}
