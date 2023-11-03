// Common
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

// MUI
import { Box, Button, Paper } from '@mui/material'

// Hooks
import { useVerifyQuery } from 'store/server'

// Components
import FormSignIn from 'components/FormSignIn'
import FormSignUp from 'components/FormSignUp'

const ViewPublic = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const [isSignIn, setIsSignIn] = useState(true)

  const verifyEmailId = searchParams.get('verifyUser') ?? ''
  const { isSuccess } = useVerifyQuery(verifyEmailId, {
    skip: !verifyEmailId
  })

  useEffect(() => {
    if (isSuccess) {
      setSearchParams('')
    }
  }, [isSuccess])

  const { Component, buttonText } = isSignIn
    ? { Component: FormSignIn, buttonText: 'Sign up' }
    : { Component: FormSignUp, buttonText: 'Sign in' }

  const handleToggleForm = () => {
    setIsSignIn(prev => !prev)
  }

  return (
    <Box p={3} width="100%" maxWidth="400px" component={Paper} zIndex={500}>
      <>
        <Component onToggleForm={handleToggleForm} />
        <Button onClick={handleToggleForm}>{buttonText}</Button>
      </>
    </Box>
  )
}

export default ViewPublic
