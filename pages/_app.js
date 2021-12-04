import '../styles/globals.css'
import Navigation from '../components/navigation'
import useDarkMode from "../hooks/useDarkMode";

function MyApp({ Component, pageProps }) {
  const [colorTheme, setTheme] = useDarkMode();
  return (
    <div className="h-screen w-screen p-10 bg-white dark:bg-gray-900  dark:text-white">
      <Navigation colorTheme={colorTheme} setTheme={setTheme} />
      <Component colorTheme={colorTheme} {...pageProps} />
    </div>
  )
}

export default MyApp
