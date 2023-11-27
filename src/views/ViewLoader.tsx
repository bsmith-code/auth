import { Backdrop, CircularProgress } from '@mui/material'

import { LayoutDefault } from 'layouts/LayoutDefault'

export const ViewLoader = () => (
  <LayoutDefault>
    <Backdrop open>
      <CircularProgress />
    </Backdrop>
  </LayoutDefault>
)
