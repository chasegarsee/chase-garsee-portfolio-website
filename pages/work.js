import Head from 'next/head'
import Image from 'next/image'
import plcMainSite from "../public/assets/preemptive-love-main-site.png"
import vvm from "../public/assets/vvm.png"
import programsForms from "../public/assets/programs-forms.png"
import styles from '../styles/Work.module.scss'

export default function Work() {
  return (
    <div className={styles.workContainer}>
    <Head>
      <title>Work</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className={styles.main}>
      <section>
        <h1 className={styles.title}>This is everything that I am really proud of. I hope you enjoy it. 🤙🏽</h1>
      </section>
      <section className={`${styles.workSection} grid grid-cols-2 gap-8`}>
        <a
          href="https://preemptivelove.org"
          className=""
          target="_blank"
        >
          <Image src={plcMainSite} />
          <h2>Preemptive Love Main Site</h2>
        </a>
        <a
          href="https://investiscripts.myshopify.com"
          className=""
          target="_blank"
        >
          <Image src={vvm} />
          <h2>Relative Range + Volume Indicator</h2>
        </a>
        <a
          href="https://forms.preemptivelove.org/"
          className=""
          target="_blank"
        >
          <Image src={programsForms} />
          <h2>Programs Forms</h2>
        </a>
      </section>
    </main>
  </div>
  )
}
