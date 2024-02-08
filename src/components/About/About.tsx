import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './About.module.scss'

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

export const About: React.FC = () => {
  return (
    <div className={styles.title}>
      <h2 className={styles.About}>About</h2>
      <div className={styles.container}>
        <img src='portfolio/img/証明写真.jpeg' alt='' />
        <div className={styles.text}>
          <p>久保　美尋 Kubo Mihiro</p>
          <p>2003年 3月 埼玉県出身</p>
          <p>
            2021年 3月 浦和実業学園高等学校 普通科課程 卒業 2023年 3月 東京工学院専門学校 音響芸術科
            芸術専門課程 卒業 2025年 3月 東京工学院専門学校 デザイン科 Webデザインコース 卒業見込
            2025年 3月 産業能率大学 情報マネジメント学部 現代マネジメント学科 通信教育課程 卒業見込
          </p>
        </div>
      </div>
    </div>
  )
}
