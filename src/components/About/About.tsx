import React from 'react'
import Image from 'next/image'
import styles from './About.module.scss'
import profileImage from '../../../img/profile-image.jpg'
// import '../AboutContainer.module.scss'

export const About = () => {
  return (
    // <div className={styles.abountContainer}>
    <div id='about'>
      <div className={styles.abountContainer}>
        <h2 className={styles.title}>About</h2>
        <div className={styles.container}>
          <figure className={styles.image}>
            <Image src={profileImage} alt='プロフィール画像' />
          </figure>
          <section className={styles.textContainer}>
            <h3 className={styles.aboutName}>久保　美尋 Kubo Mihiro</h3>
            <p  className={styles.text}>2003年 3月 埼玉県出身<br />
            {/* <p>
            2021年 3月 浦和実業学園高等学校 普通科課程 卒業
            <br />
            2023年 3月 東京工学院専門学校 音響芸術科 芸術専門課程 卒業
            <br />
            2025年 3月 東京工学院専門学校 デザイン科 Webデザインコース 卒業見込
            <br />
            2025年 3月 産業能率大学 情報マネジメント学部 現代マネジメント学科 通信教育課程 卒業見込
          </p> */}
              高校卒業後、通信制大学で学びながら、2年間音響に打ち込みました。<br />
              音楽に関連するウェブサイト、ロゴ、フライヤーなどからインスピレーションを受け、デザインの魅力に惹かれました。<br />
              音楽への愛着から、高校時代からライブハウスに足繁く通い、今でも月に最大3回は足を運んでいます。
            </p>

          </section>
        </div>
      </div>
    </div>
  )
}