import { Snackbar } from '@mui/material'

const AppNotifications = () => {
  const test = 'My error message'

  return <Snackbar open message={test} autoHideDuration={6000} />
}

export default AppNotifications
