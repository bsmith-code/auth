import { Toolbar, Typography } from '@mui/material'

const LayoutAppFooter = () => {
  const year = new Date().getFullYear()

  return (
    <Toolbar
      variant="dense"
      sx={{
        justifyContent: 'center',
        backgroundColor: 'secondary.main'
      }}
    >
      <Typography sx={{ fontSize: '0.625rem', letterSpacing: '2px' }}>
        &copy; Brian Matthew Smith, {year}. All Rights Reserved.
      </Typography>
    </Toolbar>
  )
}

export default LayoutAppFooter
