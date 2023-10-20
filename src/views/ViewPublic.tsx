// Common
import { useState } from 'react'

// MUI
import { Box, Button, Paper } from '@mui/material'

// Components
import FormSignIn from 'components/FormSignIn'
import FormSignUp from 'components/FormSignUp'
import LayoutDefault from 'layouts/LayoutDefault'

const ViewPublic = () => {
  const [isSignIn, setIsSignIn] = useState(true)

  const { Component, buttonText } = isSignIn
    ? { Component: FormSignIn, buttonText: 'Sign up' }
    : { Component: FormSignUp, buttonText: 'Sign in' }

  return (
    <LayoutDefault>
      <Box p={3} width="100%" maxWidth="400px" component={Paper} zIndex={500}>
        <>
          <Component />
          <Button onClick={() => setIsSignIn(!isSignIn)}>{buttonText}</Button>
        </>
      </Box>
    </LayoutDefault>
  )
}

export default ViewPublic
