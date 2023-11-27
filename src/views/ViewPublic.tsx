import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import { useVerifyQuery } from 'store/server'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'

import FormUserLogin from 'components/FormUserLogin'
import FormUserRegister from 'components/FormUserRegister'

import { StyledAbsoluteCenter } from 'styles'

export const ViewPublic = () => {
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
    ? { Component: FormUserLogin, buttonText: 'Sign up' }
    : { Component: FormUserRegister, buttonText: 'Sign in' }

  const handleToggleForm = () => {
    setIsSignIn(prev => !prev)
  }

  return (
    <StyledAbsoluteCenter>
      <Box p={3} width="100%" maxWidth="400px" component={Paper} zIndex={500}>
        <>
          <Component onToggleForm={handleToggleForm} />
          <Button onClick={handleToggleForm}>{buttonText}</Button>
        </>
      </Box>
    </StyledAbsoluteCenter>
  )
}
