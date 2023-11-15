// MUI
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import AddIcon from '@mui/icons-material/Add'
import MenuItem from '@mui/material/MenuItem'
import EditIcon from '@mui/icons-material/Edit'
import Typography from '@mui/material/Typography'
import CheckIcon from '@mui/icons-material/Check'
import CancelIcon from '@mui/icons-material/Close'
import DeleteIcon from '@mui/icons-material/DeleteOutlined'
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
  GridRowEditStopReasons,
  useGridApiContext,
  GridRenderEditCellParams
} from '@mui/x-data-grid'

import { mockUsers } from '__mocks__/users'
import { useState } from 'react'
import { useGetUsersQuery } from 'store/server'

const CustomEditComponent = ({
  id,
  value,
  field
}: GridRenderEditCellParams<any, string[]>) => {
  const apiRef = useGridApiContext()

  const handleChange = (event: SelectChangeEvent<string[]>) => {
    const eventValue = event.target.value as string[]

    void apiRef.current.setEditCellValue({
      id,
      field,
      value: eventValue
    })
  }

  return (
    <Select
      multiple
      value={value}
      onChange={handleChange}
      sx={{ width: '100%' }}
    >
      {['test1', 'test2', 'test3'].map(option => (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      ))}
    </Select>
  )
}

const ViewUsers = () => {
  const { data, isLoading } = useGetUsersQuery()

  console.log(data)
  const [rowModesModel, setRowModesModel] = useState<GridRowModesModel>({})

  const handleEditClick = (id: GridRowId) => {
    setRowModesModel(prev => ({ ...prev, [id]: { mode: GridRowModes.Edit } }))
  }

  const handleSaveClick = (id: GridRowId) => {
    setRowModesModel(prev => ({ ...prev, [id]: { mode: GridRowModes.View } }))
  }

  const handleCancelClick = (id: GridRowId) => {
    setRowModesModel(prev => ({
      ...prev,
      [id]: { mode: GridRowModes.View, ignoreModifications: true }
    }))
  }

  const columns: GridColDef[] = [
    {
      field: 'firstName',
      headerName: 'First Name',
      editable: true,
      width: 300
    },
    {
      field: 'lastName',
      headerName: 'Last Name',
      editable: true,
      width: 300
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 300
    },
    {
      field: 'permissions',
      headerName: 'Permissions',
      editable: true,
      valueFormatter: ({ value }: { value: string[] }) =>
        value ? value.join(', ') : '',
      renderEditCell: CustomEditComponent,
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
              icon={<CheckIcon />}
              label="Save"
              sx={{
                color: 'primary.main'
              }}
              onClick={() => handleSaveClick(id)}
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={() => handleCancelClick(id)}
              color="inherit"
            />
          ]
        }

        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={() => handleEditClick(id)}
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
          rowModesModel={rowModesModel}
          processRowUpdate={(updatedRow, originalRow) => {
            console.log(updatedRow, originalRow)
            return updatedRow
          }}
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
