import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './EntryThumbnailContainer.module.scss'

type Props = {
  children: React.ReactNode
}

export const EntryThumbnailContainer = (props: Props) => {
  return (
    <div>
      <div className={styles.EntryThumbnailContainer}>{props.children}</div>
    </div>
  )
}
