import { ReactNode, useMemo } from 'react'
import { shallowEqual } from 'react-redux'

import { selectUser } from 'store/server'

import { useAppSelector } from 'hooks/useRedux'

import { LayoutDefault } from 'layouts/LayoutDefault'
import { ViewApps } from 'views/ViewApps'
import { ViewUsers } from 'views/ViewUsers'

const PreparedView = ({ view }: { view: ReactNode }) => (
  <LayoutDefault>{view}</LayoutDefault>
)

const allRoutes = [
  {
    label: 'Home',
    index: true,
    path: '/',
    element: <PreparedView view={<ViewApps />} />,
    permissions: ['ALL']
  },
  {
    path: '/users',
    element: <PreparedView view={<ViewUsers />} />,
    label: 'Users',
    permissions: ['SUPER_ADMIN']
  }
]

export const useAppRouter = () => {
  const user = useAppSelector(selectUser, shallowEqual)
  const userPermissions = user?.permissions ?? []

  const availableRoutes = useMemo(
    () =>
      allRoutes.filter(({ permissions }) =>
        permissions.some(permission =>
          userPermissions.find(
            ({ name }) => permission === name || permission === 'ALL'
          )
        )
      ),
    [user]
  )

  return { availableRoutes }
}
