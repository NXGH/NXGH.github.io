import InnerPreview from '@/Preview'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getPost } from '../api'
import { parse } from './parse'

export default function App() {
  const { id } = useParams()

  const [post, setPost] = useState('')

  useEffect(() => {
    if (!id) return
    getPost(id).then(res => {
      setPost(parse(res as unknown as string))
    })

    return () => {}
  }, [id])

  return <InnerPreview source={post} />
}
