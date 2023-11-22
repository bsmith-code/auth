import { NavLink } from 'react-router-dom'

import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'

import { useAppRouter } from 'hooks/useAppRouter'

const StyledLink = styled(NavLink)(({ theme }) => ({
  fontWeight: 700,
  textDecoration: 'none',
  marginRight: theme.spacing(2),
  color: theme.palette.primary.main,
  '&.active': {
    color: theme.palette.text.primary
  },
  '&:hover': {
    textDecoration: 'underline'
  }
}))

export const NavAppMenu = () => {
  const { availableRoutes } = useAppRouter()

  return (
    <Box component="nav">
      {availableRoutes.map(({ path, label }) => (
        <StyledLink key={`link-${label}`} to={path}>
          {label}
        </StyledLink>
      ))}
    </Box>
  )
}
