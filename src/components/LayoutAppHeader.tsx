import { shallowEqual } from 'react-redux'

import { selectUser } from 'store/server'

import { Box, Toolbar, Typography } from '@mui/material'

import { useAppSelector } from 'hooks/useRedux'

import { MenuAccount } from 'components/MenuAccount'
import { NavAppMenu } from 'components/NavAppMenu'

const LayoutAppHeader = () => {
  const user = useAppSelector(selectUser, shallowEqual)

  return (
    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Typography variant="subtitle1" color="primary" sx={{ fontWeight: 800 }}>
        Brian M. Smith
      </Typography>

      {user && (
        <Box display="flex" alignItems="center">
          <NavAppMenu />
          <MenuAccount user={user} />
        </Box>
      )}
    </Toolbar>
  )
}

export default LayoutAppHeader
