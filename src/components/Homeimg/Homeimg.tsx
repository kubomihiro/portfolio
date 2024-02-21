import React from 'react'
import styles from './Homeimg.module.scss'
import Image from 'next/image'
import HomeImage from '../../../img/home3-min.jpeg'



export const Homeimg = () => {
  return (
    <div  className={styles.box}>
    <figure className={styles.image}>
      <Image src={HomeImage} alt='home画像'/>
    </figure> 
    </div>
  )
}
