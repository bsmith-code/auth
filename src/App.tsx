import { lazy, Suspense } from 'react'

import { useSessionQuery } from 'store/server'

import ViewLoader from 'views/ViewLoader'

export const App = () => {
  const { data: user } = useSessionQuery()

  const RouterPublic = lazy(() => import('routers/RouterPublic'))
  const RouterProtected = lazy(() => import('routers/RouterProtected'))

  return (
    <Suspense fallback={<ViewLoader />}>
      {user ? <RouterProtected /> : <RouterPublic />}
    </Suspense>
  )
}
