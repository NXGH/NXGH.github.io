import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import styles from './nav.module.scss'

function Nav() {
  const { id } = useParams()

  const [nav, setNav] = useState<string>('')

  useEffect(() => {
    if (!id) return
    let timer = setInterval(() => {
      console.log('setInterval')
      const __nav = document.querySelector('nav.toc')

      if (__nav) {
        setNav(__nav.innerHTML)
        clearInterval(timer)
      }
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [id])

  return <div className={styles.nav} dangerouslySetInnerHTML={{ __html: nav }}></div>
}

export default Nav
