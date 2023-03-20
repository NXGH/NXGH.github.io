import { useState, useEffect } from 'react'
import * as runtime from 'react/jsx-runtime'
import { compile, run } from '@mdx-js/mdx'
import { remarkCodeHike } from '@code-hike/mdx'
import { CH } from '@code-hike/mdx/components'
import rehypeSlug from 'rehype-slug'
import rehypeToc from '@jsdevtools/rehype-toc'

import '@code-hike/mdx/styles.css'

import themes from './themes'
import Preview from './mdx-component/preview'

function InnerPreview({ source, config }: { source: string; config?: any }) {
  const [Content, setContent] = useState<any>(undefined!)
  const [error, setError] = useState(undefined)

  useEffect(() => {
    compile(source, {
      outputFormat: 'function-body',
      remarkPlugins: [
        [
          remarkCodeHike,
          {
            ...config,
            autoImport: false,
            theme: themes['dracula-soft'],
          },
        ],
      ],
      rehypePlugins: [rehypeSlug, rehypeToc],
    })
      .then(c => {
        return run(String(c), runtime)
      })
      .then(x => {
        setContent(() => x.default)
        setError(undefined)
      })
      .catch(e => {
        setError(e.message)
        console.error({ e })
      })
  }, [source, config])
  return <>{Content ? <Content components={{ CH, Preview }} /> : null}</>
}

export default InnerPreview
