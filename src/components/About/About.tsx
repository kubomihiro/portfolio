import React from 'react'
import Image from 'next/image'
import styles from './About.module.scss'
import profileImage from '../../../img/profile-image.jpg'

export const About = () => {
  return (
    <div className={styles.abountContainer}>
      <h2 className={styles.title}>About</h2>
      <div className={styles.container}>
        <figure className={styles.image}>
          <Image src={profileImage} alt='プロフィール画像' />
        </figure>
        <section className={styles.textContainer}>
          <h3 className={styles.aboutName}>久保　美尋 Kubo Mihiro</h3>
          <p>2003年 3月 埼玉県出身</p>
          <p>
            2021年 3月 浦和実業学園高等学校 普通科課程 卒業
            <br />
            2023年 3月 東京工学院専門学校 音響芸術科 芸術専門課程 卒業
            <br />
            2025年 3月 東京工学院専門学校 デザイン科 Webデザインコース 卒業見込
            <br />
            2025年 3月 産業能率大学 情報マネジメント学部 現代マネジメント学科 通信教育課程 卒業見込
          </p>
        </section>
      </div>
    </div>
  )
}
