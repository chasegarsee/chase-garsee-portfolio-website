import styles from '../styles/Footer.module.scss'

export default function Footer() {
  return (
    <footer>
      <div className={ styles.siteFooter }>
        <a 
          href="https://github.com/chasegarsee"
          className=""
          target="_blank"
        >
          Github
        </a>
        <a
          href="https://www.linkedin.com/chasegarsee/"
          className=""
          target="_blank"
        >
          LinkedIn
        </a> 
        <a
          href="https://www.instagram.com/chasegarsee/"
          className=""
          target="_blank"
        >
          Instagram
        </a>
        <a
          href="https://www.twitter.com/chasegarsee/"
          className=""
          target="_blank"
        >
          Twitter
        </a>
      </div>
    </footer>
  )
}
