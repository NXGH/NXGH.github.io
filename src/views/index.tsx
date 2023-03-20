import { Outlet } from 'react-router-dom'

import { ReactComponent as RightArrow } from '@/assets/icon/right-arrow.svg'

function Home() {
  return (
    <main className='full flex flex-col p-50 justify-center'>
      <div className='flex flex-col justify-center items-center p-50 mb-10'>
        <h1 className='red text-6xl font-mono mb-10'>Hello World!</h1>
        <a title='docs' href='/docs'>
          <RightArrow className='w-[10vw]' />
        </a>
      </div>
    </main>
  )
}

export default function App() {
  return <Home />
}
