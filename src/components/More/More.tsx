import React from 'react'
import styles from './More.module.scss'
import Link from 'next/link'

export const More = () => {
  return (
    <p className={styles.more}>
      <Link href='/works'>and more</Link>
    </p>
  )
}
