import LayoutDefault from 'layouts/LayoutDefault'

import { Backdrop, CircularProgress } from '@mui/material'

export const ViewLoader = () => (
  <LayoutDefault>
    <Backdrop open>
      <CircularProgress />
    </Backdrop>
  </LayoutDefault>
)
