export const LightBulb = ({setTheme}) => (
  <svg
    onClick={() => setTheme("dark")}
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 text-yellow-200"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
    />
  </svg>
)

export const Moon = ({setTheme}) => (
  <svg
    onClick={() => setTheme('light')}
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 text-indigo-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
    />
  </svg>
)

export const PLCLogo = ({ color }) => (
  <svg 
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 100 44">
    <path d="M96.3 11.4V0h3.7v1.7h-1.9v3.1h1.3v1.6h-1.3v3.5h1.9v1.7h-3.7zM92.4 0l.6 6.8.8-6.8h1.6l-1.6 11.5h-1.7L90.6 0h1.8zM88 0h1.8v11.5H88V0zm-2.1 1.7v9.7h-1.8V1.7h-1.3V0h4.4v1.7h-1.3zm-5.4.4c0-.3-.1-.5-.3-.5h-.5v3.9h.5c.2 0 .3-.1.3-.5V2.1zM80.3 7h-.6v4.5h-1.8V0h2.4c.9 0 1.8.5 1.8 2.1V5c.1 1.5-.9 2-1.8 2m-3.6 4.4H75V9.1l.1-2.9-.4 2.5-.5 2.8h-1.4l-.5-2.8-.3-2.5v5.3h-1.6V0h2l.9 5.4.2 1.5.2-1.5 1-5.4h1.9v11.4zm-11.2 0V0h3.7v1.7h-1.9v3.1h1.3v1.6h-1.3v3.5h1.9v1.7h-3.7zm-4.8 0V0h3.7v1.7h-1.9v3.1h1.3v1.6h-1.3v3.5h1.9v1.7h-3.7zm-2.8-9.3c0-.3-.1-.5-.3-.5h-.4v3.5h.4c.2 0 .3-.1.3-.5V2.1zm2 9.3h-1.7c-.2-.4-.2-.9-.2-1.8V7.2c0-.3-.1-.5-.4-.5h-.4v4.8h-1.8V0h2.4c.9 0 1.9.5 1.9 2v2.6c0 .5-.1 1-.6 1.3.5.3.7.7.7 1.3v2.3c-.1.8 0 1.4.1 1.9m-7.2-9.3c0-.3-.1-.5-.3-.5H52v3.9h.5c.2 0 .3-.1.3-.5V2.1zM52.6 7H52v4.5h-1.8V0h2.4c.9 0 1.8.5 1.8 2.1V5c.1 1.5-.9 2-1.8 2m37.6 36.6v-30h9.8v4.3h-5.1v8.2h3.4v4.1h-3.4v9h5.1v4.4zm-10.6-30l1.7 17.7 2.1-17.7h4.2l-4.1 30h-4.4l-4.1-30zm-12.4-.5c-3.2 0-5.9 2.4-5.9 6V38c0 3.6 2.6 6 5.9 6 3.2 0 5.9-2.4 5.9-6V19.2c-.1-3.6-2.7-6.1-5.9-6.1zm1.1 25.2c0 .8-.4 1.2-1.1 1.2-.7 0-1.1-.5-1.1-1.2V18.9c0-.8.4-1.2 1.1-1.2.7 0 1.1.5 1.1 1.2v19.4zm-8.6 5.3h-9.5v-30h4.7v25.6h4.8z" 
    fill={ color }/>
    <g id="HEART_ICON_x5F_2019_5_">
      <path fill="#E91D2D" d="M27.2 0L20 7l-7.2-7L0 12.4l9.7 9.4 10.3-10 10.3 10 9.7-9.4z"/>
      <path fill="#6DA9DC" d="M20 31.8l-10.3-10L0 31.2l12.8 12.4 7.2-7 7.2 7L40 31.2l-9.7-9.4z"/>
      <path fill="#79242F" d="M20 31.8l10.3-10-10.3-10-10.3 10z"/>
    </g>
  </svg>
)