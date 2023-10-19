// Common
import { ReactNode } from 'react'

// MUI
import { Box, Paper } from '@mui/material'

// Components
import LayoutAppFooter from 'components/LayoutAppFooter'
import LayoutAppHeader from 'components/LayoutAppHeader'

interface IProps {
  children: ReactNode
}
const LayoutDefault = ({ children }: IProps) => (
  <>
    <LayoutAppHeader />
    <Box
      width="100vw"
      display="flex"
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
      height="calc(100vh - 128px)"
      sx={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url('assets/view_page-bg.jpg')`,
        '&:after': {
          top: 0,
          left: 0,
          right: 0,
          zIndex: 0,
          bottom: 0,
          content: '""',
          display: 'block',
          position: 'absolute',
          background: 'rgba(255, 255, 255, 0.4)'
        }
      }}
    >
      <Paper elevation={3} sx={{ zIndex: '500' }}>
        {children}
      </Paper>
    </Box>
    <LayoutAppFooter />
  </>
)

export default LayoutDefault
