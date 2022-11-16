import { Add, MoreVert } from '@mui/icons-material'
import {
  Box,
  Button,
  Chip,
  IconButton,
  MenuItem,
  Modal,
  OutlinedInput,
  Select,
  TextField,
  Typography,
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
} from '@mui/material'
import { useState } from 'react'
import { useAppDispatch } from '../store'
import { createTask, taskInterface } from '../store/taskSlice'

//Styles for dropdown tags options
const ITEM_HEIGHT = 30
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
}

const labels = ['Important', 'Bug', 'Issue', 'High Priority']

const CreateTask = () => {
  const [newTask, setNewTask] = useState<taskInterface>({
    id: 0,
    title: '',
    description: '',
    creationDate: '',
    tags: [],
    creator: '',
    status: '',
  })
  const [open, setOpen] = useState(false)
  const [errorMessage, setErrorMessage] = useState(false)
  const handleOpen = () => {
    setOpen(true)
    setNewTask({
      id: 0,
      title: '',
      description: '',
      creationDate: '',
      tags: [],
      creator: '',
      status: '',
    })
  }
  const handleClose = () => {
    setOpen(false)
  }

  const dispatch = useAppDispatch()

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setNewTask({
      ...newTask,
      [name]: value,
      id: Math.round(Math.random() * Date.now()),
      creationDate: new Date().toDateString().slice(4),
      creator: 'Sandy',
      status: 'In Progress...',
    })
  }

  const createNewTask = () => {
    newTask.title ? dispatch(createTask(newTask)) : setErrorMessage(true)
    setNewTask({
      ...newTask,
      id: 0,
      title: '',
      description: '',
      creationDate: '',
      tags: [],
    })
  }

  return (
    <>
      <IconButton
        onClick={handleOpen}
        sx={{ color: 'black', alignSelf: 'flex-start' }}
      >
        <Add sx={{ width: '50px', height: '50px' }} />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            width: { xs: '15rem', sm: '25rem', md: '30rem' },
            minHeight: '15rem',
            background: 'white',
            borderRadius: '10px',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="h6">Create New Task</Typography>
            <IconButton aria-label="actions" size="small">
              <MoreVert />
            </IconButton>
          </Box>

          <TextField
            fullWidth
            label="Title"
            type="text"
            name="title"
            value={newTask.title}
            onChange={(e) => handleChange(e)}
            error={errorMessage}
            onBlur={() => {
              newTask.title ? setErrorMessage(false) : setErrorMessage(true)
            }}
            helperText={errorMessage && "Title Can't be empty"}
          />
          <TextField
            fullWidth
            type="textarea"
            multiline
            rows={3}
            label="Description"
            name="description"
            value={newTask.description}
            onChange={(e) => handleChange(e)}
            sx={{ overflow: 'visible' }}
          />

          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <FormControl sx={{ mt: 1, width: 400 }}>
              <InputLabel>Mark as</InputLabel>
              <Select
                sx={{
                  width: '75%',
                  margin: '10px 0',
                }}
                variant="standard"
                multiple
                value={newTask.tags}
                size="small"
                onChange={(e) =>
                  setNewTask({
                    ...newTask,
                    tags:
                      typeof e.target.value === 'string'
                        ? e.target.value.split(',')
                        : e.target.value,
                  })
                }
                input={<OutlinedInput label="Mark as" />}
                MenuProps={MenuProps}
                renderValue={(selected) => (
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip key={value} label={value} />
                    ))}
                  </Box>
                )}
              >
                {labels.map((tag) => (
                  <MenuItem key={tag} value={tag}>
                    <Checkbox
                      checked={newTask.tags.indexOf(tag) > -1}
                      sx={{ color: 'red' }}
                    />
                    <ListItemText primary={tag} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Button
              sx={{
                textTransform: 'capitalize',
                mt: 2,
                maxHeight: '40px',
              }}
              variant="contained"
              onClick={createNewTask}
            >
              Create
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  )
}

export default CreateTask
