import React from 'react'
import styles from './EntryBody.module.scss'

type Props = {
  children: React.ReactNode
}

export const EntryBody = (props: Props) => {
  return <div className={styles.entryBody}>{props.children}</div>
}
