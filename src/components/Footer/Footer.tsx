import React from 'react'
import styles from './Footer.module.scss'

type Props = {
  children: React.ReactNode
}

export const Footer = ({ children }: Props) => {
  return (
    <footer className={styles.footer}>
      {/* {children} */}
      {/* ↑test の文字が表示される */}
      <p className={styles.copyright}>@2023 Kubo Mihiro</p>
    </footer>
  )
}
