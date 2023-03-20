import { useState, useCallback, useEffect } from 'react'
import { PostType } from '.'
import { Link } from 'react-router-dom'

function Aside({ posts }: { posts: PostType[] }) {
  if (!posts.length) return null
  return (
    <aside>
      {posts.map(item => {
        return (
          <div key={item.path} className='font-loveisfree hover:border-b my-2'>
            <Link to={'/docs/' + item.path}>{item.title}</Link>
          </div>
        )
      })}
    </aside>
  )
}

export default Aside
