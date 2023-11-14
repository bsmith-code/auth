// MUI
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/DeleteOutlined'
import SaveIcon from '@mui/icons-material/Save'
import CancelIcon from '@mui/icons-material/Close'
import {
  DataGrid,
  GridColDef,
  GridRowsProp,
  GridRowModesModel,
  GridRowModes,
  GridToolbarContainer,
  GridActionsCellItem,
  GridEventListener,
  GridRowId,
  GridRowModel,
  GridRowEditStopReasons
} from '@mui/x-data-grid'

import { mockUsers } from '__mocks__/users'
import { useState } from 'react'

const ViewUsers = () => {
  const myUsers = []
  const [rowModesModel, setRowModesModel] = useState<GridRowModesModel>({})

  const columns: GridColDef[] = [
    {
      field: 'firstName',
      headerName: 'First Name',
      width: 300
    },
    {
      field: 'lastName',
      headerName: 'Last Name',
      width: 300
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 300
    },
    {
      field: 'roles',
      headerName: 'Roles',
      width: 560
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 100,
      cellClassName: 'actions',
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              sx={{
                color: 'primary.main'
              }}
              // onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              // onClick={handleCancelClick(id)}
              color="inherit"
            />
          ]
        }

        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            // onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            // onClick={handleDeleteClick(id)}
            color="inherit"
          />
        ]
      }
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
