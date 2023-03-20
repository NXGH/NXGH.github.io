// import Image from 'next/image'
import Menu from './doc-list'
import Nav from './nav'
import Tabs from '@/components/tabs'
import { PropsWithClassName } from '@/types'

import { ReactComponent as FolderSvg } from '@/assets/icon/folder.svg'
import { ReactComponent as NavSvg } from '@/assets/icon/nav.svg'
import { useEffect, useState } from 'react'
import { getPosts } from '../../api'

export interface PostType {
  path: string
  title: string
}

export default function Aside(props: PropsWithClassName) {
  const { className = '' } = props

  const [posts, setPosts] = useState<PostType[]>([])
  useEffect(() => {
    getPosts().then(res => {
      setPosts(res)
    })
  }, [])

  return (
    <div className={`flex flex-col w-full p-5 ${className}`}>
      <Tabs defaultActived='menu'>
        <div className='w-full mb-5'>
          <Tabs.LabelItem id='menu'>
            <FolderSvg />
          </Tabs.LabelItem>
          <Tabs.LabelItem id='nav'>
            <NavSvg />
          </Tabs.LabelItem>
        </div>
        <div>
          <Tabs.Panel id='menu'>
            <Menu posts={posts} />
          </Tabs.Panel>
          <Tabs.Panel id='nav'>
            <Nav />
          </Tabs.Panel>
        </div>
      </Tabs>
    </div>
  )
}
