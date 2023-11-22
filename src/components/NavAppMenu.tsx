import { NavLink } from 'react-router-dom'

import { Box, styled } from '@mui/material'

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

export const NavAppMenu = () => (
  <Box component="nav">
    <StyledLink to="/">Home</StyledLink>
    <StyledLink to="/users">Users</StyledLink>
  </Box>
)
