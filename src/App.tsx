import { useRoutes } from 'react-router-dom'

import Index from './views/index'
import Docs from './views/docs/index'
import DocsItem from './views/docs/post'

function App() {
  let element = useRoutes([
    {
      path: '/',
      element: <Index />,
    },
    {
      path: '/docs',
      element: <Docs />,
      children: [
        {
          path: ':id',
          element: <DocsItem />,
        },
      ],
    },
    {
      path: '*',
      element: <div>404</div>,
    }
  ])

  return element
}
export default App
