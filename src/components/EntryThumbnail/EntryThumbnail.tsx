import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './EntryThumbnail.module.scss'

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

export const EntryThumbnail = (props: Props) => {
  const linkText = `/entry/${props.id}` // '/entry/' + props.id 上はこの書き方省略形

  return (
    <article className={styles.entryItem}>
      <h2 className={styles.title}>
        <Link href={linkText}>{props.title}</Link>
      </h2>

      {props.description && <p className={styles.description}>{props.description}</p>}
      {props.eyecatch && (
        <Link href={linkText}>
          <figure className={styles.image}>
            <Image
              src={props.eyecatch.url}
              alt={props.eyecatch.alt}
              width={props.eyecatch.width}
              height={props.eyecatch.height}
            />
          </figure>
        </Link>
      )}
    </article>
  )
}
