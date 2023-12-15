import React from 'react'
import styles from './EntryBody.module.css'

type Props = {
  children: React.ReactNode
}

export const EntryBody = (props: Props) => {
  return <div className={styles.entryBody}>{props.children}</div>
}
