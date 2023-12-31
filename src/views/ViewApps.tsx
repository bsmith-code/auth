import { Grid, Link, Paper, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

import { StyledAbsoluteCenter } from 'styles'

const StyledGridItem = styled(Paper)(({ theme }) => ({
  height: '100px',
  backgroundColor: '#fff',
  transition: 'all ease 0.2s',
  '&:hover': {
    backgroundColor: theme.palette.secondary.main
  }
}))

const StyledLink = styled(Link)(({ theme }) => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  flexDirection: 'column',
  justifyContent: 'center',
  color: theme.palette.text.secondary
}))

const myApps = [
  {
    title: 'Portfolio',
    url: process.env.REACT_APP_PORTFOLIO_BASE_URL
  },
  {
    title: 'Chat',
    url: process.env.REACT_APP_CHAT_BASE_URL
  },
  {
    title: 'Games (coming soon)',
    url: ''
  }
]

export const ViewApps = () => (
  <StyledAbsoluteCenter margin="0 auto" maxWidth="600px">
    <Typography variant="h3" component="h1" mb={4}>
      My Apps
    </Typography>

    <Grid container spacing={4}>
      {myApps.map(({ url, title }) => (
        <Grid item xs={4} key={`app-${title}`}>
          <StyledGridItem>
            <StyledLink href={url} target="_blank">
              {title}
            </StyledLink>
          </StyledGridItem>
        </Grid>
      ))}
    </Grid>
  </StyledAbsoluteCenter>
)
