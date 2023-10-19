import { Toolbar } from '@mui/material'

const LayoutAppFooter = () => {
  const year = new Date().getFullYear()

  return (
    <Toolbar>&copy; Brian Matthew Smith, {year}. All Rights Reserved.</Toolbar>
  )
}

export default LayoutAppFooter
