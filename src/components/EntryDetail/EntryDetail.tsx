import React from 'react'
import Image from 'next/image'
import styles from './EntryDetail.module.scss'

import { EntryBody } from '@/components/EntryBody/EntryBody'

type Props = {
  title?: string
  description?: string
  content?: string
  eyecatch?: {
    url: string
    alt: string
    height: number
    width: number
  }
}

export const EntryDetail = (props: Props) => {
  return (
    <article className={styles.entryDetail}>
      <h1 className={styles.entryDetailTitle}>{props.title}</h1>

      {props.description && <p className={styles.description}>{props.description}</p>}
      {props.eyecatch && (
        <figure className={styles.image}>
          <Image
            src={props.eyecatch.url}
            alt={props.eyecatch.alt}
            width={props.eyecatch.width}
            height={props.eyecatch.height}
          />
        </figure>
      )}

      <EntryBody>
        <div dangerouslySetInnerHTML={{ __html: props.content! }} />
      </EntryBody>
    </article>
  )
}
