import { memo } from 'react'
import BaseLayout from './layout-wrapper'
import MdxContent from './mdx-content'

import Aside from './aside'
import ThemeIcon from './theme-button'

import { ReactComponent as ArrowLeft } from '@/assets/icon/arrow-left.svg'
import { ReactComponent as ArrowRight } from '@/assets/icon/arrow-right.svg'

function DocLayout({ children }: { children: React.ReactNode }) {
  return (
    <BaseLayout className='flex full'>
      <BaseLayout.Aside className='w-[20vw] h-full relative'>
        <Aside />
      </BaseLayout.Aside>
      <div className='w-full h-full overflow-auto relative'>
        <header className='sticky top-0 w-ful  h-[5vh] flex justify-between items-center border-b backdrop-filter backdrop-blur-md z-index-10 px-10'>
          <BaseLayout.Handler className=''>
            <ArrowLeft />
            <ArrowRight />
          </BaseLayout.Handler>
          <ThemeIcon className='' />
        </header>
        <MdxContent>{children}</MdxContent>
      </div>
    </BaseLayout>
  )
}

export default memo(DocLayout)
