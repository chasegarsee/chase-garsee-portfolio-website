import Link from "next/link";
import styles from '../styles/Navigation.module.scss'
import { LightBulb, Moon } from './icons';

export default function Navigation({colorTheme, setTheme}) {
  return (
    <div className={`${colorTheme === 'dark' ? styles.light : styles.dark} ${styles.navigation}`}>
      <div>
        <Link href="/" className={styles.title}>Chase Garsee</Link>
      </div>
      <div className={styles.navitems}>
        {colorTheme === "light" ? (
          <Moon setTheme={setTheme} />
        ) : (
          <LightBulb setTheme={setTheme} />
        )}
        <Link href="/work" className={styles.work}>Work</Link>
        <Link href="/contact" className={styles.contact}>Contact</Link>
      </div>
    </div>
  );
}