import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { EntryThumbnail } from '@/components/EntryThumbnail/EntryThumbnail'
import { EntryThumbnailContainer } from '@/components/EntryThumbnailContainer/EntryThumbnailContainer'
import styles from './EntryThumbnails.module.scss'
// ;/インポートしてる/

type Entry = {
  id: string
  title?: string
  description?: string
  eyecatch?: {
    url: string
    alt: string
    height: number
    width: number
  }
}

type Props = {
  entries: Entry[]
}

export const EntryThumbnails = (props: Props) => {
  return (
    <div className={styles.abountContainer}>
      <h2 className={styles.title}>Works</h2>
      <div className={styles.container}>
        <EntryThumbnailContainer>
          {props.entries.map((v) => (
            <EntryThumbnail
              id={v.id}
              key={v.id}
              // title={v.title}  //作品名
              description={v.description}
              eyecatch={v.eyecatch}
            ></EntryThumbnail>
          ))}
        </EntryThumbnailContainer>
      </div>
    </div>
  )
}
