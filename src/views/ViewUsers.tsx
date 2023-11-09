// MUI
import { Typography } from '@mui/material'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { mockUsers } from '__mocks__/users'

const ViewUsers = () => {
  const myUsers = []

  const columns: GridColDef[] = [
    {
      field: 'firstName',
      headerName: 'First Name'
    },
    {
      field: 'lastName',
      headerName: 'Last Name'
    },
    {
      field: 'email',
      headerName: 'Email'
    },
    {
      field: 'roles',
      headerName: 'Roles'
    }
  ]

  return (
    <>
      <Typography variant="h3" component="h1" mb={4}>
        Users
      </Typography>
      <DataGrid
        getRowId={({ uuid }: { uuid: string }) => uuid}
        rows={mockUsers}
        columns={columns}
      />
    </>
  )
}

export default ViewUsers
