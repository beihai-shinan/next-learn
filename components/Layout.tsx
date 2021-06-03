import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import styles from './Layout.module.less';

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div className={styles.layout}>
    {/* <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head> */}
    <h1>react context</h1>

    <header className={styles.header}>
      <nav>
        <Link href="/">
          <a>首页</a>
        </Link>
        &nbsp;&nbsp;{'|'}&nbsp;&nbsp;
        <Link href="/about">
          <a>关于</a>
        </Link>{' '}
      </nav>
    </header>
    {children}
  </div>
)

export default Layout
