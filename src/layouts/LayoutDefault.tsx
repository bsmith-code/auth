// Common
import { ReactNode } from 'react'

// MUI
import { Box } from '@mui/material'

// Hooks
import { useAppNotifications } from 'hooks/useAppNotifications'

// Components
import LayoutAppFooter from 'components/LayoutAppFooter'
import LayoutAppHeader from 'components/LayoutAppHeader'

interface IProps {
  children: ReactNode
}
const LayoutDefault = ({ children }: IProps) => {
  useAppNotifications()

  return (
    <>
      <LayoutAppHeader />
      <Box
        zIndex={10}
        width="100vw"
        position="relative"
        height="calc(100vh - 64px - 48px)"
        sx={{
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundImage: `url('assets/view_page-bg.jpg')`,
          '&:after': {
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: '-1',
            content: '""',
            display: 'block',
            position: 'absolute',
            background: 'rgba(255, 255, 255, 0.4)'
          }
        }}
      >
        <Box height="100%" overflow="auto" py={3}>
          {children}
        </Box>
      </Box>
      <LayoutAppFooter />
    </>
  )
}

export default LayoutDefault
