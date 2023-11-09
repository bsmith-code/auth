// MUI
import { Box, Typography } from '@mui/material'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { mockUsers } from '__mocks__/users'

const ViewUsers = () => {
  const myUsers = []

  const columns: GridColDef[] = [
    {
      field: 'firstName',
      headerName: 'First Name',
      width: 1600 / 5
    },
    {
      field: 'lastName',
      headerName: 'Last Name',
      width: 1600 / 5
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 1600 / 5
    },
    {
      field: 'roles',
      headerName: 'Roles',
      width: 1600 / 5
    }
  ]

  return (
    <Box maxWidth="1600px" margin="0 auto">
      <Typography variant="h3" component="h1" mb={4}>
        Users
      </Typography>
      <Box bgcolor="common.white" p={2} borderRadius={1}>
        <DataGrid
          getRowId={({ uuid }: { uuid: string }) => uuid}
          rows={mockUsers}
          columns={columns}
          editMode="row"
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5
              }
            }
          }}
        />
      </Box>
    </Box>
  )
}

export default ViewUsers
