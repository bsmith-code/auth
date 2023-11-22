import { ReactNode, useMemo } from 'react'
import { Route } from 'react-router-dom'
import LayoutDefault from 'layouts/LayoutDefault'

import { selectUser } from 'store/server'

import { useAppSelector } from 'hooks/useRedux'

import ViewApps from 'views/ViewApps'
import ViewUsers from 'views/ViewUsers'

const ROUTE_PERMISSIONS: Record<string, string[]> = {
  '/': ['ALL'],
  '/users': ['SUPER_ADMIN']
}

const PreparedView = ({ view }: { view: ReactNode }) => (
  <LayoutDefault>{view}</LayoutDefault>
)

export const useAppRouter = () => {
  const user = useAppSelector(selectUser)
  const userPermissions = user?.permissions ?? []

  const allRoutes = useMemo(
    () => ({
      '/': <Route index element={<PreparedView view={<ViewApps />} />} />,
      '/users': (
        <Route path="/users" element={<PreparedView view={<ViewUsers />} />} />
      )
    }),
    [user]
  )

  const availableRoutes = useMemo(
    () =>
      Object.entries(allRoutes)
        .filter(([route]) => {
          const routePermissions = ROUTE_PERMISSIONS?.[route] ?? []

          return routePermissions.some(permission =>
            userPermissions.find(
              ({ name }) => permission === name || permission === 'ALL'
            )
          )
        })
        .map(([_, route]) => route),
    [allRoutes]
  )

  return { availableRoutes }
}
