import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

export default function Home( { colorTheme } ) {
  console.log(colorTheme)
  return (
    <div className={`${colorTheme === 'dark' ? styles.light : styles.dark} ${styles.container}`}>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section>
          <h1 className={styles.title}>
            Hey there, I'm Chase.👋🏼 I'm a{" "}
            <a href="https://nextjs.org" className="">full stack software engineer</a>
            ,{" "}
            <a href="https://nextjs.org" className="">husband, father, and fitness enthusiast</a>
            , and{" "}
            <a href="https://nextjs.org" className="">stock market investor</a>
            . I am a student of life passionate for growth, helping others achieve their wildest dreams, learning new things, and networking with people from all walks of life.
          </h1>
        </section>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
