import '../styles/globals.scss'
import Navigation from '../components/navigation'
import useDarkMode from "../hooks/useDarkMode";
import Footer from '../components/footer';

function MyApp({ Component, pageProps }) {
  const [colorTheme, setTheme] = useDarkMode();
  return (
    <div className="app-container bg-white text-gray-700 dark:bg-gray-900 dark:text-white">
      <Navigation colorTheme={colorTheme} setTheme={setTheme} />
      <Component colorTheme={colorTheme} {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp
