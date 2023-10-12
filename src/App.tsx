import { useState } from 'react'
import { Box, Paper } from '@mui/material'
import FormSignIn from 'components/FormSignIn'
import FormSignUp from 'components/FormSignUp'

const App = () => {
  const [isSignIn, setIsSignIn] = useState(true)

  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
    >
      <Paper elevation={3}>
        <Box p={3}>{isSignIn ? <FormSignIn /> : <FormSignUp />}</Box>
      </Paper>
    </Box>
  )
}

export default App
