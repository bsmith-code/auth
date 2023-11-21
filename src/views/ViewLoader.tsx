import LayoutDefault from 'layouts/LayoutDefault'

import { Backdrop, CircularProgress } from '@mui/material'

const ViewLoader = () => (
  <LayoutDefault>
    <Backdrop open>
      <CircularProgress />
    </Backdrop>
  </LayoutDefault>
)

export default ViewLoader
