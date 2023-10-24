import { Box, Paper } from '@mui/material'
import LayoutDefault from 'layouts/LayoutDefault'

const ViewLoader = () => (
  <LayoutDefault>
    <Paper p={8} component={Box}>
      Loading...
    </Paper>
  </LayoutDefault>
)

export default ViewLoader
