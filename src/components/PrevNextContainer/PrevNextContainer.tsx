import Link from 'next/link'
import styles from './PrevNextContainer.module.scss'
import React from 'react'

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
  prevEntry: Entry
  nextEntry: Entry
}

export const PrevNextContainer = (props: Props) => {
  const prevEntry = props.prevEntry
  const nextEntry = props.nextEntry

  const prevEntryLinkText = `/entry/${props.prevEntry?.id}`
  const nextEntryLinkText = `/entry/${props.nextEntry?.id}`
  return (
    <ul className={styles.prevNextContainer}>
      {prevEntry && (
        <li className={styles.prevLink}>
          <Link href={prevEntryLinkText}>{prevEntry.title}</Link>
        </li>
      )}
      {nextEntry && (
        <li className={styles.next}>
          <Link href={nextEntryLinkText}>{nextEntry.title}</Link>
        </li>
      )}
    </ul>
  )
}
