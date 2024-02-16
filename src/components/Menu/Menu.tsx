import React from 'react'

import styles from './Menu.module.scss'
import Link from 'next/link'

const Menu: React.FC = () => {
  // コンポーネントの実装

  return (
    <>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/works'>Works</Link>
        </li>
        <li>
          <Link href='/'>About</Link>
        </li>
        <li>
          <Link href='/'>Contact</Link>
        </li>
      </ul>
    </>
  )
}

export default Menu
