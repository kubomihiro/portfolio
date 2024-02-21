import React from 'react'
import styles from './Homeimg.module.scss'
import Image from 'next/image'
import HomeImage from '../../../img/home.jpg'



export const Homeimg = () => {
  return (
    <div>
    <figure>
      <Image src={HomeImage} alt='home画像'/>
    </figure> 
    </div>
  )
}
