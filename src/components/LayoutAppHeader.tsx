// Common
import { Suspense, lazy } from 'react'

// Store
import { selectUser } from 'store/server'

// MUI
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

// Hooks
import { useAppSelector } from 'hooks/useRedux'

const LayoutAppHeader = () => {
  const user = useAppSelector(selectUser)
  const MenuAccount = lazy(() => import('components/MenuAccount'))

  return (
    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Typography variant="subtitle1" color="primary" sx={{ fontWeight: 800 }}>
        Brian M. Smith
      </Typography>
      <Suspense>{user && <MenuAccount user={user} />}</Suspense>
    </Toolbar>
  )
}

export default LayoutAppHeader
