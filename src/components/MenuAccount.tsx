import { useLogoutMutation } from 'store/server'

import Logout from '@mui/icons-material/Logout'
import {
  Avatar,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip
} from '@mui/material'

import { useMenu } from 'hooks/useMenu'

import { IUser } from 'types'

interface IProps {
  user: IUser
}

const getFirstLetter = (str: string) => str.charAt(0)
const getUserInitials = (user: IUser) =>
  `${getFirstLetter(user.firstName)}${getFirstLetter(user.lastName)}`

export const MenuAccount = ({ user }: IProps) => {
  const userInitials = getUserInitials(user)
  const { isOpen, anchorEl, handleOpenMenu, handleCloseMenu } = useMenu()
  const [logout] = useLogoutMutation()

  return (
    <>
      <Tooltip title="Account Settings">
        <IconButton onClick={handleOpenMenu}>
          <Avatar>{userInitials}</Avatar>
        </IconButton>
      </Tooltip>
      <Menu
        open={isOpen}
        anchorEl={anchorEl}
        onClose={handleCloseMenu}
        onClick={handleCloseMenu}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem
          onClick={() => {
            void logout()
          }}
        >
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  )
}
