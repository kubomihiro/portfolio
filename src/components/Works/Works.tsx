import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Works.module.scss'

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

export const Works = (props: Props) => {
  return (
    <div className={styles.abountContainer}>
      <h2 className={styles.title}>Works</h2>
      <div className={styles.container}>
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
      </div>
    </div>
  )
}
