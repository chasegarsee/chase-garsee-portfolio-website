import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import { PLCLogo } from '../components/icons'
import lambdaLogo from '../public/assets/lambda-logo.png'
import lambdaLogoWhite from '../public/assets/lambda-logo-white.png'

export default function Home( { colorTheme } ) {
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
            <a 
              href="https://github.com/chasegarsee"
              className=""
              target="_blank"
            >full stack software engineer</a>
            ,{" "}
            <a
              href="https://www.instagram.com/chasegarsee/"
              className=""
              target="_blank"
            >husband, father, and fitness enthusiast</a>
            , and{" "}
            <a
              href="https://investiscripts.myshopify.com"
              className=""
              target="_blank"
            >stock market investor</a>
            . I am a student of life passionate for growth, helping others achieve their wildest dreams, learning new things, and networking with people from all walks of life.
          </h1>
        </section>
        <section className={styles.employers}>
          <div className={styles.current}>
            <h2>
              Currently
            </h2>
            <div className={styles.imageContainer}>
            <a
              href="https://preemptivelove.org"
              className=""
              target="_blank"
            >
              <PLCLogo color={colorTheme === 'dark' ? '#00263D' : "#FFFFFF"} />
            </a>
            </div>
          </div>
          <div className={styles.previous}>
            <h2>
              Previously
            </h2>
            <div className={styles.imageContainer}>
            <a
              href="https://bloomtech.com"
              className=""
              target="_blank"
            >
              <Image
                className={ styles.previousImg}
                src={ colorTheme === 'dark' ? lambdaLogo : lambdaLogoWhite } 
                alt='lambda-logo'
              />
            </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}