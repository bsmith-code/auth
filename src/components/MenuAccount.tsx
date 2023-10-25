// Store
import { useLogoutMutation } from 'store/server'

// MUI
import {
  Menu,
  Avatar,
  Tooltip,
  MenuItem,
  IconButton,
  ListItemIcon
} from '@mui/material'
import Logout from '@mui/icons-material/Logout'

// Hooks
import { useMenu } from 'hooks/useMenu'

// Types
import { IUser } from 'types'

interface IProps {
  user: IUser
}

const getFirstLetter = (str: string) => str.charAt(0)
const getUserInitials = (user: IUser) =>
  `${getFirstLetter(user.firstName)}${getFirstLetter(user.lastName)}`

const MenuAccount = ({ user }: IProps) => {
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

export default MenuAccount
