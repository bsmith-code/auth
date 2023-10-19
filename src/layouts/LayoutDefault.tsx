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
        backgroundImage: `url('assets/view_page-bg.jpg')`
      }}
    >
      <Paper elevation={3}>{children}</Paper>
    </Box>
    <LayoutAppFooter />
  </>
)

export default LayoutDefault
