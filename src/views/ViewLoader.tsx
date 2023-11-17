// MUI
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'

// Components
import LayoutDefault from 'layouts/LayoutDefault'

const ViewLoader = () => (
  <LayoutDefault>
    <Paper p={8} component={Box}>
      Loading...
    </Paper>
  </LayoutDefault>
)

export default ViewLoader
