import { useState } from 'react'
import type { PropsWithClassName } from 'src/types'
import { ReactComponent as NightIcon } from '@/assets/icon/night.svg'
import { ReactComponent as SunIcon } from '@/assets/icon/sun.svg'

function useTheme(defaultTheme: 'dark' | 'light' = 'light') {
  const [theme, setTheme] = useState<'dark' | 'light'>(defaultTheme)

  function __setTheme(__theme: 'dark' | 'light') {
    const html = document.querySelector('html')
    html!.dataset.theme = __theme
    setTheme(__theme)
  }

  return { setTheme: __setTheme, theme }
}

export default function Theme(props: PropsWithClassName) {
  const { theme, setTheme } = useTheme('light')

  return (
    <div className={props.className}>
      {theme === 'dark' ? (
        <span onClick={() => setTheme('light')}>
          <NightIcon />
        </span>
      ) : (
        <span onClick={() => setTheme('dark')}>
          <SunIcon />
        </span>
      )}
    </div>
  )
}
