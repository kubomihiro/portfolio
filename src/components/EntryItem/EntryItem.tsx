import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './EntryItem.module.scss'

type Props = {
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

export const EntryItem = (props: Props) => {
  return (
    <article className={styles.entryItem}>
      <h2 className={styles.entryItemTitle}>
        <Link href={`/entry/${props.id}`}>{props.title}</Link>
      </h2>

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
    </article>
  )
}
