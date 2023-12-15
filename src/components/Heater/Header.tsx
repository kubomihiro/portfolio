import React from 'react'

import styles from './Header.module.css'
import Link from 'next/link'

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        <Link href='/'>Portfolio</Link>
      </h1>
    </header>
  )
}
