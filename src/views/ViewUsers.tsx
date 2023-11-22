import { useState } from 'react'

import {
  useGetPermissionsQuery,
  useGetUsersQuery,
  useUpdateUserMutation
} from 'store/server'

import CheckIcon from '@mui/icons-material/Check'
import CancelIcon from '@mui/icons-material/Close'
import DeleteIcon from '@mui/icons-material/DeleteOutlined'
import EditIcon from '@mui/icons-material/Edit'
import {
  Box,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography
} from '@mui/material'
import {
  DataGrid,
  GridActionsCellItem,
  GridColDef,
  GridRenderEditCellParams,
  GridRowId,
  GridRowModes,
  GridRowModesModel,
  useGridApiContext
} from '@mui/x-data-grid'

import { IPermission, IUser } from 'types'

const CustomEditComponent = ({
  id,
  value = [],
  field,
  options
}: GridRenderEditCellParams<any, string[]> & {
  options: { label: string; value: string }[]
}) => {
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
      {options.map(({ value: optValue, label: optLabel }) => (
        <MenuItem key={optValue} value={optValue}>
          {optLabel}
        </MenuItem>
      ))}
    </Select>
  )
}

export const ViewUsers = () => {
  const { data: users = [], isLoading: isFetchingUsers } = useGetUsersQuery()
  const { permissions, isFetchingPerms } = useGetPermissionsQuery(undefined, {
    selectFromResult: ({ data = [], isLoading }) => ({
      permissions: data.map(({ id, name }) => ({ label: name, value: id })),
      isFetchingPerms: isLoading
    })
  })

  const [updateUser, { error, isLoading: isUpdatingUser, isSuccess }] =
    useUpdateUserMutation()

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

  const handleUpdateUser = async (updatedUser: IUser) => {
    const response = await updateUser(updatedUser).unwrap()

    return response
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
      valueGetter: ({ value }: { value: IPermission[] }) =>
        value.map(({ id }) => id),
      valueFormatter: ({ value }: { value: string[] }) =>
        value
          .map(id => permissions?.find(perm => perm.value === id)?.label ?? '')
          .join(', '),
      renderEditCell: props => (
        <CustomEditComponent {...props} options={permissions} />
      ),
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
          getRowId={({ id }: IUser) => id}
          rows={users}
          columns={columns}
          editMode="row"
          rowModesModel={rowModesModel}
          processRowUpdate={handleUpdateUser}
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
