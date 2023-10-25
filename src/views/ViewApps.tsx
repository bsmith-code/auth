import { Box, Grid, Link, Paper, Typography, styled } from '@mui/material'

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
    url: ''
  },
  {
    title: 'Games',
    url: ''
  }
]

const ViewApps = () => (
  <Box
    width="100%"
    display="flex"
    maxWidth="600px"
    alignItems="center"
    flexDirection="column"
    justifyContent="center"
  >
    <Box mb={4}>
      <Typography variant="h3" component="h1">
        My Apps
      </Typography>
    </Box>

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
  </Box>
)

export default ViewApps
