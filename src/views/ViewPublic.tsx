// Common
import { useState } from 'react'

// MUI
import { Box, Button } from '@mui/material'

// Components
import FormSignIn from 'components/FormSignIn'
import FormSignUp from 'components/FormSignUp'
import LayoutDefault from 'layouts/LayoutDefault'

const ViewPublic = () => {
  const [isSignIn, setIsSignIn] = useState(true)

  return (
    <LayoutDefault>
      <Box p={3}>
        <>
          {isSignIn ? <FormSignIn /> : <FormSignUp />}
          <Button onClick={() => setIsSignIn(!isSignIn)}>
            {isSignIn ? 'Sign up' : 'Sign in'}
          </Button>
        </>
      </Box>
    </LayoutDefault>
  )
}

export default ViewPublic
