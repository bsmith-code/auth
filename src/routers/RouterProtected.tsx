import { useEffect } from 'react'
import { Navigate, Route, Routes, useSearchParams } from 'react-router-dom'

import { useAppRouter } from 'hooks/useAppRouter'
import { useIdleSession } from 'hooks/useIdleSession'

const RouterProtected = () => {
  useIdleSession()
  const { availableRoutes } = useAppRouter()
  const [searchParams] = useSearchParams()

  const redirectUrl = searchParams.get('redirectUrl')

  useEffect(() => {
    if (redirectUrl) {
      window.location.assign(redirectUrl)
    }
  }, [redirectUrl])

  return redirectUrl ? null : (
    <Routes>
      {availableRoutes.map(props => (
        <Route key={props.path} {...props} />
      ))}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default RouterProtected
