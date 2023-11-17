// Store
import { useLogoutMutation } from 'store/server'

// MUI
import Menu from '@mui/material/Menu'
import Avatar from '@mui/material/Avatar'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import IconButton from '@mui/material/IconButton'
import ListItemIcon from '@mui/material/ListItemIcon'
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
